const { GraphQLError } = require("graphql");
const { verify } = require("../../util/security");
const logger = require("../../util/logger");

module.exports = function (resolver) {
  return function (parent, args, context) {
    const { token, ...subcontext } = context;

    logger.debug("Validando token");

    if (!token) {
      throw new GraphQLError("Token de JWT es obligatorio");
    }

    try {
      const user = verify(token);
      logger.debug(`Payload: ${user}`);
      return resolver(parent, args, { ...subcontext, user });
    } catch (e) {
      throw new GraphQLError("Token inválido o expirado");
    }
  };
};
