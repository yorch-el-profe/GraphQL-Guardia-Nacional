const { models } = require("../../database");
const authorization = require("../contexts/authorization");

const getUser = authorization(function (_, __, { user }) {
  return models.User.findById(user._id).exec();
});

module.exports = {
  getUser,
};
