const path = require('path');
const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:'
})

module.exports = {
    db
};
