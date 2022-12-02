require('dotenv').config();

// Configuración de Base de Datos
const { connect } = require('mongoose');
connect(process.env.MONGO_URI)
    .then(function () {
        console.log('> Conectado con MongoDB ✔')
    });

// Configuración de Apollo}
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { verify } from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 8080 },
    context: ({ req }: any) => {
        if (req.headers.authorization) {
            try {
                const user = verify(req.headers.authorization, process.env.JWT_SECRET);

                return { user };
            } catch (e) {
                throw new GraphQLError("Token inválido o expirado");
            }
        }
    }
}).then(function () {
    console.log('> Escuchando puerto 8080 🚀');
});
