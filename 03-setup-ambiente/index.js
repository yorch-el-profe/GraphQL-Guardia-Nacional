const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

mongoose
    .connect('mongodb+srv://root:root@bedu.3dpevnp.mongodb.net/graphql?retryWrites=true&w=majority')
    .then(() => console.log('Conectado a la base de datos'))
    .catch(() => console.error('No se puedo establecer conexión con la BD'));

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(8080, function () {
    console.log('API Graphl escuchando puerto 8080');
});