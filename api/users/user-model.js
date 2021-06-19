const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  allItems,
  findItemById,
  findUserItems,
  addItemToUser,
  deleteUser,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}

function allItems(id) {
  return db("items");
}

function findItemById(id) {
  return db("items").where({ id }).first();
}

function findUserItems(userId) {
  return db("items as i")
    .join("users", function () {
      this.on("users.id", "=", "i.user_id");
    })
    .select(
      "i.id",
      "i.item_name",
      "i.description",
      "i.availability",
      "i.daily_rate",
      "i.condition",
      "i.location"
    )
    .where("i.user_id", userId);
}

function addItemToUser(userId, payload) {
  return db("items as i")
    .join("users", function () {
      this.on("users.id", "=", "i.user_id");
    })
    .insert(payload)
    .select("*")
    .where(userId, payload.user_id);
}

function deleteUser(id) {
  return findById(id).del(id);
}
