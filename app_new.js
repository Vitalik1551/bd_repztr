const http = require('http');
const path = require('path');
const fs = require('fs');

const logsDir = 'logs';
const logsPath = path.resolve('./logs');
if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const file = 'access-log.log';
const logFilePath = path.resolve(logsPath, file);

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  fs.appendFileSync(logFilePath, `${new Date().toISOString()}: request\n`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World!`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
//Изменения №1