const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });

  res.status(200).json(todos);
};

// get a todo
const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Todo does not exist" });
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "Todo does not exist" });
  }

  res.status(200).json(todo);
};

// create new todo
const createTodo = async (req, res) => {
  const { body, duration } = req.body;

  // add document to db
  try {
    const todo = await Todo.create({ body, duration });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a todo

// edit a todo

module.exports = {
  getTodos,
  getTodo,
  createTodo,
};
