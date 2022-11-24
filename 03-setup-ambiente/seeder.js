require('dotenv').config();

const Entity = require('./database/entity');
const JSON = require('./mx.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

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