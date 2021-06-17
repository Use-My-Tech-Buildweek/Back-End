const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "Mark",
          password: bcrypt.hashSync("1234", 8),
          role: "renter",
        },
        {
          username: "Justin",
          password: bcrypt.hashSync("1234", 8),
          role: "owner",
        },
        {
          username: "Matt",
          password: bcrypt.hashSync("1234", 8),
          role: "renter",
        },
      ]);
    });
};
