require("dotenv").config();
const mongoose = require("mongoose");

const { DATABASE_URI } = process.env;

mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "todo-app",
  })
  .then(() => console.log("connected to mongodb"))
  .catch((e) => {
    console.error("Could not connect to the database", e);
    // process.exit();
  });

module.exports = mongoose;
