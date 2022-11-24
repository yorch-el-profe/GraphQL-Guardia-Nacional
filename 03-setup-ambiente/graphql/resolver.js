const Entity = require('../database/entity');

async function getAll() {
    return Entity.find().exec();
}

function getById({ id }) {
    return Entity.findById(id);
}

function getByName({ name }) {
    return Entity.find({ $text: { $search: name } }).exec();
}

module.exports = {
    getAll,
    getById,
    getByName
}