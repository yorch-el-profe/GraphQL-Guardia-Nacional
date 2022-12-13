const postQueries = require("./post");
const userQueries = require("./user");

module.exports = {
  ...postQueries,
  ...userQueries,
};
