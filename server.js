const express = require("express");

const AccountRouter = require("./accounts/accountRouter.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", AccountRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;
