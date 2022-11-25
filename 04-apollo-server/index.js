const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = `
    type Query {
        helloWorld: String
    }
`;

const resolvers = {
    Query: {
        helloWorld() {
            return "Hello World";
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 8080 }
}).then(function () {
    console.log('Servidor Apollo escuchando el puerto 8080 🚀');
});

