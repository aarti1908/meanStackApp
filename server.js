const http = require("http");
const app = require("./backend/app");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const host = 'localhost';
const port = normalizePort(process.env.PORT || "8000");

app.set("port", port);

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
