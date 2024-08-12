const app = require("express");
const { isLoggedIn } = require("../middlewares/authenticateToken");
const todoHandlers = require("../controllers/todo");

const router = app.Router();

const apiBasePathUrl = "/api/v1/todo";

router.get(
  `${apiBasePathUrl}/fetchAllTodos`,
  isLoggedIn,
  todoHandlers.fetchAllTodos
);
router.post(
  `${apiBasePathUrl}/createTodo`,
  isLoggedIn,
  todoHandlers.createTodo
);

router.put(
  `${apiBasePathUrl}/updateTodo/:id`,
  (req, res) => {
    console.log(req.params);
    res.send(req.params);
  },
  isLoggedIn,
  todoHandlers.updateTodo
);

module.exports = router;
