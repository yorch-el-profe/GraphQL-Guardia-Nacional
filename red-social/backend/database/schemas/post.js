const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    content: { type: String, required: true },
    likes: { type: Number, default: 0, min: 0 },
    author: { type: Schema.Types.ObjectId, ref: "users", required: true },
  },
  { collection: "posts", timestamps: true }
);
