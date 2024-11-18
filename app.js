const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const User = require("./models/user");
const todoRoutes = require("./routes/todo");
const Task = require("./models/todo");

const port = process.env.PORT || 7000;

const app = express();

// Middleware
app.use(cors(
  {
    origin: ["https://todo-app-weld-seven.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
todoRoutes(app);
userRoutes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, () => {
  console.log("listening port", port);
});

module.exports = app;
