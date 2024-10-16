const { createServer } = require('node:http');
var os = require("os");
var host = os.hostname();
const version = '3.01';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`This code is running on: ${host}:${port}/ Version: ${version}`);
});
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
