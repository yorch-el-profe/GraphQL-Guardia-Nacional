const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Entity {
        _id: ID
        name: String
        population: Int
        latitude: Float
        longitude: Float
    }

    type Query {
        getAll: [Entity]
        getById(id: ID!): Entity
        getByName(name: String!): Entity
    }
`);