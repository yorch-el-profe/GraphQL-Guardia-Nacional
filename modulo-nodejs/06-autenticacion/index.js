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
const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError(formatedError) {
        const { code ,data } = formatedError.extensions;
        return {
            code,
            data,
            error: true
        }
    }
});

startStandaloneServer(server, {
    listen: { port: 8080 },
    context: ({ req }) => {
        if (req.headers.authorization) {
            try {
                const user = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

                return { user };
            } catch (e) {
                throw new GraphQLError("Token inválido o expirado");
            }
        }
    }
}).then(function () {
    console.log('> Escuchando puerto 8080 🚀');
});
