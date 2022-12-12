const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
    following: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  { collection: "users", timestamps: true }
);
