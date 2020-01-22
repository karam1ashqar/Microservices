const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const sockets = {
  connect: (req, res, next) => {}
};

module.exports = sockets;
