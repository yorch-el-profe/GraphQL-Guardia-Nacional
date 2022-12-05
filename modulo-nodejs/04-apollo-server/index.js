const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const axios = require('axios');
const { GraphQLError } = require('graphql');

const typeDefs = `
    type SimplePokemon {
        number: Int
        name: String
    }

    type Pokemon {
        number: Int
        name: String
        types: [String]
        artwork: String
        sprite: String
    }

    type Query {
        getAll: [SimplePokemon]
        getByNumber(number: Int!): Pokemon
    }
`;

const resolvers = {
    Query: {
        async getAll() {
            try {
                const response = await axios
                    .get('https://bedu-pokemon-api.herokuapp.com/pokemon');

                const { data } = response.data;
                return data;
            } catch (e) {
                throw new GraphQLError('API de Pokemon no disponible');
            }
        },
        async getByNumber(_, { number }) {
            try {
                const response = await axios
                    .get('https://bedu-pokemon-api.herokuapp.com/pokemon/' + number);

                const { data } = response.data;
                return data;
            } catch (e) {
                throw new GraphQLError('API de Pokemon no disponible');
            }
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

