const userMutation = require("./user");
const authMutation = require("./auth");

module.exports = {
  ...userMutation,
  ...authMutation,
};
