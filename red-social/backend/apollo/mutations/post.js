const authorization = require("../contexts/authorization");
const { models } = require("../../database");

const createPost = authorization(function (_, { content }, { user }) {
  return new models.Post({
    content,
    author: user._id,
  }).save();
});

module.exports = {
  createPost,
};
