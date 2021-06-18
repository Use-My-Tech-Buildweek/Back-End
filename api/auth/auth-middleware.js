const { findBy } = require("../users/users-model");

const checkUsernameExists = async (req, res, next) => {
  try {
    const [user] = await findBy({ username: req.body.username });
    if (!user) {
      next({ status: 401, message: "Invalid credentials" });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkIfString = (req, res, next) => {
  if (typeof req.body.username === "string") {
    next();
  } else {
    res.status(422).json({ message: "Username must be a string" });
  }
};

const checkRegistration = (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.role) {
    res
      .status(422)
      .json({ message: "Username, Password, and Role are required fields" });
  } else {
    next();
  }
};

const validateRoleName = (req, res, next) => {
  if (req.body.role === "renter" || req.body.role.trim() === "renter") {
    next();
  } else if (req.body.role === "owner" || req.body.role.trim() === "owner") {
    next();
  } else if (req.body.role.trim().length > 32) {
    next({ status: 422, message: "Role name is too long" });
  } else {
    next({ status: 422, message: "Must be a Renter or an Owner" });
  }
};

module.exports = {
  validateRoleName,
  checkRegistration,
  checkUsernameExists,
  checkIfString,
};
