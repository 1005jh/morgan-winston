const express = require("express");
const logger = require("./logger");
const morganMiddleware = require("morganMiddleware");

const app = express();
app.use(morganMiddleware);
app.listen(3000, () => {
  logger.info("Server listening on port 3000");
});
