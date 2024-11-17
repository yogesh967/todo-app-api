const Todo = require("../models/todo");

// GET
const fetchAllTodos = async (req, res) => {
  const { id } = req.user;
  await Todo.find({ userId: id })
    .then((data) => {
      if (data && data.length === 0)
        return res.status(204).json({ err: "No data found" });

      res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ err: err.message });
    });
};

// POST
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

// PUT
const updateTodo = async (req, res) => {
  const todo = req.body;
  const todoId = req.params.id;

  await Todo.findByIdAndUpdate({ _id: todoId }, todo, { new: true })
    .then((data) => {
      if (data) return res.status(200).json(data);
      else res.status(404).json({ message: "Task not found" });
      return;
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

// DELETE
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete({ _id: id })
    .then((data) => {
      if (data)
        return res.status(200).json({ message: "Task deleted successfully!" });
      else return res.status(404).json({ message: "Task not found!" });
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

// PATCH
const doneTask = async (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  await Todo.findByIdAndUpdate({ _id: id }, { isDone: isDone }, { new: true })
    .then((data) => {
      if (data)
        return res
          .status(200)
          .json({ message: "Task marked as done successfully!" });
      else return res.status(404).json({ message: "Task not found!" });
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

module.exports = {
  fetchAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  doneTask,
};
