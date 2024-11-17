module.exports = (app) => {
  const { isLoggedIn } = require("../middlewares/authenticateToken");
  const todoHandlers = require("../controllers/todo");

  const apiBasePathUrl = "/api/v1/todo";

  app.get(
    `${apiBasePathUrl}/fetchAllTodos`,
    isLoggedIn,
    todoHandlers.fetchAllTodos
  );
  app.post(`${apiBasePathUrl}/createTodo`, isLoggedIn, todoHandlers.createTodo);

  app.put(
    `${apiBasePathUrl}/updateTodo/:id`,
    isLoggedIn,
    todoHandlers.updateTodo
  );

  app.delete(
    `${apiBasePathUrl}/deleteTodo/:id`,
    isLoggedIn,
    todoHandlers.deleteTodo
  );

  app.patch(
    `${apiBasePathUrl}/DoneTodo/:id`,
    isLoggedIn,
    todoHandlers.doneTask
  );
};
