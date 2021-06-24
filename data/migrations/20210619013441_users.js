exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();
    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users.string("department", 18).notNullable();
    users.string("bio", 512);
    users.string("profile_pic", 2048);
    users.string("location", 18);
    users.integer("rented_item_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
