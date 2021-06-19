const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router");
const equipmentRouter = require("./equipment/equipment-router");
const requestsRouter = require("./requests/requests-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/equipment", equipmentRouter);
server.use("/api/requests", requestsRouter);

// const sessionOptions = {
//   name: "monkey",
//   secret: "keep it secret, keep it safe!",
//   cookie: {
//     maxAge: 1000 * 60 * 60,
//     secure: false,
//     httpOnly: false,
//   },
//   resave: false,
//   saveUninitialized: false,
//   store: new KnexSessionStore({
//     knex: require("../data/db-config"),
//     tablename: "sessions",
//     sidfieldname: "sid",
//     createtable: true,
//     clearInterval: 1000 * 60 * 60,
//   }),
// };
// server.use(session(sessionOptions));

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
