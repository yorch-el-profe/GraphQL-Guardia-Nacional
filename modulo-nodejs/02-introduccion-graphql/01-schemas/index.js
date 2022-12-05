const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const express = require('express');
const app = express();

const schema = buildSchema(`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Post {
        id: ID!
        content: String!
        likes: Int
        author: User!
    }

    type Query {
        getPosts: [Post]
        getPost(id: ID!): Post
        getUser(username: String!): User
    }
`);

const posts = [
    {
        id: 1,
        content: 'Hola Mundo',
        likes: 50,
        author: 300
    },
    {
        id: 2,
        content: 'Esto es una prueba',
        likes: 0,
        author: 300
    }
]

const users = [
    {
        id: 300,
        username: 'fogosito69',
        email: 'cachondo420@gmail.com'
    }
]

const resolvers = {
    getPosts() {
        return posts
            .map((p) => ({ 
                    ...p, 
                    author: users
                        .find((u) => u.id === p.author)
                }));
    }
}

app.use('/graphql', graphqlHTTP({
    schema, // => schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(8080, function () {
    console.log('Escuchando puerto 8080 para GraphQL');
});