require("dotenv").config();
const cors = require("cors");
const path = require("path");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();


const PORT = process.env.JSON_SERVER_PORT;

server.use(middleware);

server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running at ${PORT}`);
})