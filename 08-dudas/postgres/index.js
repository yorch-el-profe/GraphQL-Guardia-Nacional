const { Sequelize } = require('sequelize');

// con uri
const sequelize = new Sequelize('postgres://...');

// con datos
const sequelize = new Sequelize('database', 'user', 'pass', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
    })
    .catch(function (error) {
        console.error('Unable to connect to the database:', error);
    })