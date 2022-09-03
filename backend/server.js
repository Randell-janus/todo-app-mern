const express = require("express");
const todoRoutes = require("./routes/todos");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
