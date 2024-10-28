# nodejs
Simple web app to display a hostname and version

## Container creation and push

You can use the aws CLI to log in to allow you push the docker image to the registry:

aws ecr get-login-password --region ca-central-1 | docker login --username AWS --password-stdin *************.dkr.ecr.ca-central-1.amazonaws.com/ppsre-app-ecr-repo

Replace the asterisk with your aws id and ensure the region is set appropriately.

Bash shell script pushimage.sh to build the container and push to the AWS Elastic Container Repository. The image tagged with Latest will be pulled when the target group nodes are created.

## Todo:

Get dynamo db credentials working - see branch main
Stop hardcoding version
