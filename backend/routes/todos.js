const express = require("express");

const router = express.Router();

// get all todos
router.get("/", (req, res) => {
  res.json({ msg: "GET all todos" });
});

// get a todo
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a todo" });
});

// create new todo
router.post("/", (req, res) => {
  res.json({ msg: "POST new todo" });
});

// delete a todo
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a todo" });
});

// edit a todo
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a todo" });
});

module.exports = router;
