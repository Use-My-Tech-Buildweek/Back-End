const db = require("../../data/dbConfig");

module.exports = {
  allItems,
  findItemById,
  updateItem,
  addItem,
  itemDelete,
};

function updateItem(id, changes) {
  return db("items").where({ id }).update(changes);
}

function addItem(payload) {
  return db("items")
    .insert(payload, "id")
    .then(([id]) => {
      return findItemById(id);
    });
}

function allItems() {
  return db("items");
}

function findItemById(id) {
  return db("items").where({ id }).first();
}

function itemDelete(id) {
  return findItemById(id).del(id);
}
