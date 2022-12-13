const logger = require("../util/logger");

module.exports = function ({ req }) {
  const token = req.headers.authorization;
  logger.debug(`Token: ${token}`);
  return {
    token,
  };
};
