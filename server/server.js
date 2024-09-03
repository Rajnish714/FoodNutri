const http = require("http");
const app = require("./app");

const server = http.createServer(app);

function startServer() {
  server.listen(8000, () => {
    console.log("server has started on 8000 port");
  });
}

startServer();
