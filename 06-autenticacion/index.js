require('dotenv').config();

// Configuración de Base de Datos
const { connect } = require('mongoose');
connect(process.env.MONGO_URI)
    .then(function () {
        console.log('> Conectado con MongoDB ✔')
    });

// Configuración de Apollo
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 8080 }
}).then(function () {
    console.log('> Escuchando puerto 8080 🚀');
});
