const Entity = require('./database/entity');
const JSON = require('./mx.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@bedu.3dpevnp.mongodb.net/graphql?retryWrites=true&w=majority');

Entity.insertMany(
    JSON.map(({ city, lat, lng, population }) => ({
        name: city || "SIN NOMBRE",
        latitude: lat || 0,
        longitude: lng || 0,
        population: population || 0
    }))
).then(() => {
    console.log('Documentos insertados');
}).catch(() => {
    console.log('Error al insertar documentos')
});