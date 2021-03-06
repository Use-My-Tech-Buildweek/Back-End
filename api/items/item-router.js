const router = require("express").Router();
const Users = require("../items/item-model.js");
const restricted = require("../auth/restricted");

router.get("/items", (req, res) => {
  Users.allItems()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get items" });
    });
});

router.get("/item/:id", (req, res) => {
  Users.findItemById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get resources" });
    });
});

router.post("/item", restricted, (req, res) => {
  Users.addItem(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Item not created" });
    });
});

router.put("/item/:id", restricted, (req, res) => {
  Users.updateItem(req.params.id, req.body)
    .then((item) => {
      res.json(item);
    })
    .catch((error) => {
      res.status(500).json({ message: "Item not changed." });
    });
});

router.delete("/item/:id", restricted, (req, res) => {
  Users.itemDelete(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({ message: `Item with ID ${req.params.id} deleted` });
    })
    .catch((error) => {
      res.status(500).json({ message: "Item not deleted" });
    });
});

module.exports = router;
