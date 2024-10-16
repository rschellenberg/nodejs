const { createServer } = require('node:http');
var os = require("os");
var host = os.hostname();
//const hostname = '127.0.0.1';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${host}:${port}/`);
});
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
