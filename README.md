# nodejs
Simple web app to display a hostname and version

## Container creation and push

Bash shell script pushimage.sh to build the container and push to the AWS Elastic Container Repository. The image tagged with Latest will be pulled when the target group nodes are created.

## Todo:

Get dynamo db credentials working - see branch main
Stop hardcoding version
