const { models } = require("../../database");
const authorization = require("../contexts/authorization");

exports.getUser = authorization(function (_, __, { user }) {
  return models.User.findById(user._id).exec();
});
