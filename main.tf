##################################################################################
# STATE
##################################################################################
terraform {
  backend "s3" {
    bucket = "jakl-tf-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}

##################################################################################
# DATA
##################################################################################

variable "awsKey" {
  description = "The AWS key"
  type        = string
#  sensitive   = true
}
variable "awsSecret" {
  description = "The AWS secret"
  type        = string
#  sensitive   = true
}

variable "dockerPwd" {
  description = "Docker repo password"
  type        = string
#  sensitive   = true
}

variable "dockerUname" {
  description = "Docker repo username"
  type        = string
#  sensitive   = true
}

variable "awsKeypairHash" {
  description = "EC2 ssh key"
#  sensitive   = true
}

data "aws_ami" "amazonLinux" {
  most_recent   = true
  owners        = ["amazon"]
  filter {
    name   = "name"
    values = ["amzn2-ami-ecs-hvm-2.0.20221025-x86_64-ebs"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}

data "aws_eip" "web-eip" {
  filter {
    name   = "tag:Name"
    values = ["web-eip"]
  }
}

resource "aws_key_pair" "keypair" {
  key_name   = "jakl-web-deploy"
  public_key = var.awsKeypairHash
}

##################################################################################
# PROVIDERS
##################################################################################

provider "aws" {
  access_key = var.awsKey
  secret_key = var.awsSecret
  region     = "us-west-2"
}

##################################################################################
# RESOURCES
##################################################################################

# NETWORKING #
resource "aws_vpc" "vpc-auto" {
  cidr_block           = "10.1.0.0/16"
  enable_dns_hostnames = true
  tags = {
    name: "web-vpc-auto"
  }
}

resource "aws_internet_gateway" "igw-auto" {
  vpc_id = aws_vpc.vpc-auto.id
  tags = {
    name: "web-igw-auto"
  }
}

resource "aws_subnet" "web-subnt-auto" {
  cidr_block              = "10.1.254.0/24"
  vpc_id                  = aws_vpc.vpc-auto.id
  map_public_ip_on_launch = true
  availability_zone = "us-west-2a"
  tags = {
    name: "web-subnt-auto"
  }
}

// already exists on the server
resource "aws_eip_association" "staging_eip" {
  instance_id   = aws_instance.jakl-web-auto.id
  allocation_id = data.aws_eip.web-eip.id
}

# ROUTING #
resource "aws_route_table" "rtb-auto" {
  vpc_id = aws_vpc.vpc-auto.id
  tags = {
    name: "web-rt-auto"
  }

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw-auto.id
  }
}

resource "aws_route_table_association" "rta-subnet1" {
  subnet_id      = aws_subnet.web-subnt-auto.id
  route_table_id = aws_route_table.rtb-auto.id
}

# SECURITY GROUPS #
resource "aws_security_group" "web-sg-auto" {
  name   = "web-sg-auto"
  vpc_id = aws_vpc.vpc-auto.id
  tags = {
    name: "web-sg-auto"
  }

  # HTTP access from anywhere
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# INSTANCES #
resource "aws_instance" "jakl-web-auto" {
  ami                    = data.aws_ami.amazonLinux.id
  availability_zone      = "us-west-2a"
  instance_type          = "t2.medium"
  subnet_id              = aws_subnet.web-subnt-auto.id
  vpc_security_group_ids = [aws_security_group.web-sg-auto.id]
  monitoring = true
  key_name = "jakl-web-deploy"
  tags = {
    Name = "jakl-web-auto"
  }

  user_data = <<EOF
  #! /bin/bash
  #sudo yum update -y
  sudo amazon-linux-extras install docker
  sudo usermod -a -G docker ec2-user
  sudo service docker start
  docker login --username $dockerUname --password $dockerPwd
  docker pull aklaimd/jakl-ui:latest
  docker run -d -p 80:80 aklaimd/jakl-ui:latest
  EOF

}