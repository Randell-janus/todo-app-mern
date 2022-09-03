const express = require("express");
const {
  getTodos,
  getTodo,
  createTodo,
} = require("../controllers/todoController");

const router = express.Router();

// get all todos
router.get("/", getTodos);

// get a todo
router.get("/:id", getTodo);

// create new todo
router.post("/", createTodo);

// delete a todo
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a todo" });
});

// edit a todo
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a todo" });
});

module.exports = router;
