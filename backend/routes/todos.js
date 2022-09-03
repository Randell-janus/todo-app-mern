const express = require("express");
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/todoController");

const router = express.Router();

// get all todos
router.get("/", getTodos);

// get a todo
router.get("/:id", getTodo);

// create new todo
router.post("/", createTodo);

// delete a todo
router.delete("/:id", deleteTodo);

// edit a todo
router.patch("/:id", editTodo);

module.exports = router;
