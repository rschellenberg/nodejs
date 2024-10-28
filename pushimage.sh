#bin/bash
sudo docker build -t ppsre-app-ecr-repo .
sudo docker tag ppsre-app-ecr-repo:latest 433596888974.dkr.ecr.ca-central-1.amazonaws.com/ppsre-app-ecr-repo:latest
sudo docker push 433596888974.dkr.ecr.ca-central-1.amazonaws.com/ppsre-app-ecr-repo:latest

