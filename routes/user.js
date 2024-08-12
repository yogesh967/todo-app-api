module.exports = (app) => {
  const userHandlers = require("../controllers/user");
  const apiBasePathUrl = "/api/v1/auth";

  app.route(`${apiBasePathUrl}/signup`).post(userHandlers.signup);
  app.route(`${apiBasePathUrl}/login`).post(userHandlers.login);
};
