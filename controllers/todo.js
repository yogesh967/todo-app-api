const Todo = require("../models/todo");

const fetchAllTodos = async (req, res) => {
  const { id } = req.user;
  await Todo.find({ userId: id })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ err: err.message });
    });
};

const createTodo = async (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

const updateTodo = async (req, res) => {
  const todo = req.body;
  const todoId = "66b75043fc41a5493871d9fa";

  await Todo.findByIdAndUpdate({ _id: todoId }, todo, { new: true })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

module.exports = { fetchAllTodos, createTodo, updateTodo };
