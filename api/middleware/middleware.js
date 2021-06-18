const { JWT_SECRET } = require("../secrets/index");
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({ status: 401, message: "Token is required" });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: "Invalid token" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

const checkRoleRenter = (req, res, next) => {
  if (!req.decodedToken) {
    res.json("Token is required");
  } else {
    if (req.decodedToken.role === "renter") {
      next();
    } else {
      res.status(403).json("Are you a renter?");
    }
  }
};

const checkRoleOwner = (req, res, next) => {
  if (!req.decodedToken) {
    res.json("Token is required");
  } else {
    if (req.decodedToken.role === "owner") {
      next();
    } else {
      res.status(403).json("Are you the owner?");
    }
  }
};

module.exports = {
  checkRoleRenter,
  checkRoleOwner,
  restricted,
};
