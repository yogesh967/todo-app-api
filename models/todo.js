const { Schema, model } = require("../database/connection");

const TodoSchema = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Todo", TodoSchema);
