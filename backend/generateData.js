const mongoose = require("mongoose");
const Todo = require("./models/todoModel");
require("dotenv").config();

async function populateDB() {
  await mongoose.connect(process.env.MONGO_URI);
  await Todo.insertMany([
    {
      body: "Meet with friends",
      duration: 3,
    },
    {
      body: "Play some games",
      duration: 2,
    },
    {
      body: "Go to the gym",
      duration: 4,
    },
    {
      body: "Go to church",
      duration: 2,
    },
    {
      body: "Watch a movie",
      duration: 3,
    },
  ]);
}

populateDB();
