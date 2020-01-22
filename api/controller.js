const properties = require("../package.json");
const sockets = require("../service/sockets");

const controllers = {
  about: (req, res) => {
    const aboutInfo = {
      name: properties.name,
      version: properties.version
    };
    res.json(aboutInfo);
  },
  connect: (req, res) => {}
};

module.exports = controllers;
