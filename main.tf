##################################################################################
# PROVIDERS
##################################################################################

provider "aws" {
  access_key = "AKIARJXCRRNHDDDAGGY3"
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
    values = ["amzn2-ami-hvm-*-gp2"]
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

}

resource "aws_internet_gateway" "igw-auto" {
  vpc_id = aws_vpc.vpc-auto.id

}

resource "aws_subnet" "web-subnt-auto" {
  cidr_block              = "10.1.254.0/24"
  vpc_id                  = aws_vpc.vpc-auto.id
  map_public_ip_on_launch = true
}

# ROUTING #
resource "aws_route_table" "rtb" {
  vpc_id = aws_vpc.vpc-auto.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw-auto.id
  }
}

resource "aws_route_table_association" "rta-subnet1" {
  subnet_id      = aws_subnet.web-subnt-auto.id
  route_table_id = aws_route_table.rtb.id
}

# SECURITY GROUPS #
resource "aws_security_group" "web-sg-auto" {
  name   = "web-sg-auto"
  vpc_id = aws_vpc.vpc-auto.id

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
  instance_type          = "a1.medium"
  subnet_id              = aws_subnet.web-subnt-auto.id
  vpc_security_group_ids = [aws_security_group.web-sg-auto.id]
  monitoring = true

  key_name = "jakl-web-deploy"
  tags = {
    Name = "jakl-web-auto"
  }
  depends_on = [
    aws_key_pair.keypair
  ]

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
