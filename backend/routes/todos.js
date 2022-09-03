const express = require("express");
const Todo = require("../models/todoModel");

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
router.post("/", async (req, res) => {
  const { body, duration } = req.body;

  try {
    const todo = await Todo.create({ body, duration });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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
