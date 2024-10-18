//const { createServer } = require('node:http');
var os = require("os");
var host = os.hostname();
const version = '3.01';
const port = 80;
//const currentNode = 1;

//
// Import the AWS SDK
const AWS = require('aws-sdk');

// Configure the AWS SDK with your region
AWS.config.update({ region: 'ca-central-1' }); // e.g., 'us-west-2'

// Create a DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define the parameters to get the item
const params = {
  TableName: 'ppsre', // The table name
  Key: {
    // The primary key of the item to retrieve, e.g., 'id' or whatever your primary key is
    index: 1
  }
};
// Define the parameters for updating the item
const Updateparams = {
    TableName: 'ppsre', // Replace with your table name
    Key:  {index : 1} ,
    UpdateExpression: 'ADD #attrName :incrementValue', // Expression to increment the attribute
  ExpressionAttributeNames: {
    '#attrName': 'id' // The attribute name you want to increment
  },
  ExpressionAttributeValues: {
    ':incrementValue': 1 // The value to increment by (can be any positive or negative number)
  },
  ReturnValues: 'UPDATED_NEW' // Return the updated value
};




// Function to retrieve the item from DynamoDB
async function getItemFromDynamoDB() {
  try {
    // Retrieve the item
    const data = await dynamoDB.get(params).promise();
    
    // Extract the value you need
    const currentNode = data.Item ? data.Item.id : null;
    
    // Log the retrieved value (optional)
    console.log('Current Node:', currentNode);
    
    return currentNode;
  } catch (error) {
    console.error('Error getting item from DynamoDB:', error);
    throw error;
  }
}


// Update the item in the DynamoDB table
dynamoDB.update(Updateparams, (err, data) => {
  if (err) {
    console.error('Unable to update item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Update succeeded - New ID:', JSON.stringify(data, null, 2));
  }
});


const currentNode = getItemFromDynamoDB().then((currentNode) => {
  console.log('1- Retrieved value:', currentNode);
return currentNode;
});

const { createServer } = require('node:http');

const server = createServer((req, res) => {
	const currentNode = getItemFromDynamoDB().then((currentNode) => {
	console.log('2- Retrieved value:', currentNode);
	return currentNode;
	});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`This code is running on: ${host}:${port}/Node: ${currentNode} Version: ${version}`);

});

server.listen(port, host, () => {


  console.log(`Server running at http://${host}:${port}/ ${currentNode}`);
});
