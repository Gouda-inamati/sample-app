const httpd = require('http');

http.createServer((req, res) => {
  res.write("Hello from Jenkins Pipeline");
  res.end();
}).listen(3000);
