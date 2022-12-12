require("dotenv").config();

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { connect } = require("./database");
const logger = require("./util/logger");
const resolvers = require("./apollo/resolvers");
const typeDefs = require("./apollo/typeDefs");

connect();

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const port = process.env.SERVER_PORT || 8080;

startStandaloneServer(server, {
  listen: { port },
}).then(function () {
  logger.info(`Escuchando el puerto ${port} 🚀`);
});
