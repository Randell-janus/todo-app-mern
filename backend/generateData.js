const mongoose = require("mongoose");
const Todo = require("./models/todoModel");
require("dotenv").config();

async function populateDB() {
  await mongoose.connect(process.env.MONGO_URI);
  await Todo.insertMany([
    {
      body: "meet with friends",
      duration: 3,
    },
    {
      body: "play some games",
      duration: 2,
    },
    {
      body: "make iced coffee",
      duration: 1,
    },
  ]);
}
populateDB();
