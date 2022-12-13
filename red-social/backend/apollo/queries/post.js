const { Types } = require("mongoose");
const { models } = require("../../database");

function getPostsByUserId(_, { userId }) {
  return models.Post.find({ author: Types.ObjectId(userId) })
    .populate("author")
    .exec();
}

module.exports = {
  getPostsByUserId,
};
