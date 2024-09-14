const http = require("http");
const app = require("./app");

const mongoConnect = require("./config");

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(8000, () => {
    console.log("server has started on 8000 port");
  });
}

startServer();
