const { Types } = require("mongoose");
const { models } = require("../../database");
const authorization = require("../contexts/authorization");

exports.getPosts = function () {
  return models.Post.find().populate("author").exec();
};

exports.getMyPosts = authorization(function (_, __, { user }) {
  return models.Post.find({ author: Types.ObjectId(user._id) })
    .populate("author")
    .exec();
});
