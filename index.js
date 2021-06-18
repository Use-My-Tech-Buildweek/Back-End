require("dotenv").config();

const path = require("path");
const express = require("express");

const server = require("./api/server");

const port = process.env.PORT || 6000;

server.use(express.static(path.join(__dirname, "client/dist")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
