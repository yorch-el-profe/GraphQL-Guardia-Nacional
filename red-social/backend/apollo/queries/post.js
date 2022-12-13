const { Types } = require("mongoose");
const { models } = require("../../database");
const authorization = require("../contexts/authorization");

const getMyPosts = authorization(function (_, __, { user }) {
  return models.Post.find({ author: Types.ObjectId(user._id) })
    .populate("author")
    .exec();
});

module.exports = {
  getMyPosts,
};
