const { GraphQLError } = require("graphql");
const { models } = require("../../database");
const { compare } = require("../../util/hash");
const { sign } = require("../../util/security");

exports.authenticate = async function (_, { input }) {
  const { email, password } = input;

  const user = await models.User.findOne({ email }).exec();

  if (!user) {
    throw new GraphQLError("Correo electrónico o contraseña inválido");
  }

  if (!(await compare(password, user.password))) {
    throw new GraphQLError("Correo electrónico o contraseña inválido");
  }

  return sign({ _id: user._id });
};
