const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const User = require("./models/user");
const todoRoutes = require("./routes/todo");
const Task = require("./models/todo");

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("listening port", PORT);
});

// app.use(express.urlencoded({ extended: false }));
app.use("/", todoRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

module.exports = app;
