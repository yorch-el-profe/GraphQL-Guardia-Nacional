const { models } = require("../../database");
const { hash } = require("../../util/hash");

async function createUser(_, { input }) {
  const { username, email, password } = input;
  return new models.User({
    username,
    email,
    password: await hash(password),
  }).save();
}

module.exports = {
  createUser,
};
