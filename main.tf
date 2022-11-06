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
# PROVIDERS
##################################################################################

provider "aws" {
  access_key = "AKIARJXCRRNHIIUEKSZ6"
  secret_key = "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"
  region     = "us-west-2"
}

##################################################################################
# DATA
##################################################################################

#data "aws_ssm_parameter" "ami" {
#  name = "/amazon/amzn2-ami-kernel-5.10-hvm-2.0.20221004.0-arm64-gp2"
#}

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
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC9wK6Gu3vtPar0rQ+DeBVMrTxMo8sT++KYGj5NLUHhS3ckuELd5fgKm348lsBnyZk4eg/+CFO2vq1+dp9MvgORCA/FCUHOzHnm98pBTNrkQEMCV855JZUJdrFXApL7sbVkiDZWBN20MsoasLeKwb1Dqa+9W8QnmZKY6HkMio6GumdA1I6mEM531mexrarWm9WEe0Xr27+F7KeQOeDkCOYXduuEXfVMhurabTazNTBhLPb2mV+bWpwqLFGkHlcJTOPu+4YRGI+jpFurVw05QyJHZOaLSZqj1zUyTLI28tUlvQrltbEl5d0Ly8uTeatTIzCjIF0TIgTB52tLS7hoSetYKueN2YfWTjnhZix4VX+aJco6lvuvLQikwO9mDGgqjwvdajJVOkBFL+qgzVISkM4krvQYzR5MasCUAmG5QJaCfO7EARa9mTSCFXcma+nqYgQA+UNBT77xhi1hlAVwX+/oGPFg34CMHuN3fWC+n2wtnh5ENGL8kDRHfc1i4+rhK65paQ9vJZXo5BscTxJ/mQnupfI6ZKQdAi8hDTOEknZvFSZr7+JbuXL/4IX7vs+M1r71+WPLQpkBuRawm0xo0noQERsGW31bh1dhoqv7JpqnANbvd4s4+zOrDS96AZ8RMqPHs4Bq87TOEyPOS9PeLvBenyev7L5wlu4DZSnXjffOMw== austin@jerry.local"
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
  availability_zone      = "us-west-2"
  instance_type          = "t2.medium"
  subnet_id              = aws_subnet.web-subnt-auto.id
  vpc_security_group_ids = [aws_security_group.web-sg-auto.id]
  monitoring = true
  key_name = "jakl-web-deploy"
  tags = {
    Name = "jakl-web-auto"
  }
  #  depends_on = [
  #    aws_key_pair.keypair
  #  ]

  user_data = <<EOF
  #! /bin/bash
  #sudo yum update -y
  sudo amazon-linux-extras install docker
  sudo usermod -a -G docker ec2-user
  sudo service docker start
  docker login --username aklaimd --password Moople123#
  docker pull aklaimd/jakl-ui:latest
  docker run -d -p 80:80 aklaimd/jakl-ui:latest
  EOF

}