const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const userRouter = require("./users/user-router");
const itemRouter = require("./items/item-router");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api", userRouter);
server.use("/api", itemRouter);

module.exports = server;
