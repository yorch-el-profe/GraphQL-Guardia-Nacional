const mongoose = require('mongoose');

const EntitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    population: { type: Number, default: 0, min: 0 },
    latitude: { type: Number },
    longitude: { type: Number }
}, { collection: 'entities' });

// Full Text
EntitySchema.index({ name: 'text' });

module.exports = mongoose.model('entity', EntitySchema);