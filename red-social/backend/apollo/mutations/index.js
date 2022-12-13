const userMutation = require("./user");
const authMutation = require("./auth");
const postMutation = require("./post");

module.exports = {
  ...userMutation,
  ...authMutation,
  ...postMutation,
};
