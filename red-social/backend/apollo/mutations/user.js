const { models } = require("../../database");
const { hash } = require("../../util/hash");

exports.createUser = async function (_, { input }) {
  const { username, email, password } = input;
  return new models.User({
    username,
    email,
    password: await hash(password),
  }).save();
};
