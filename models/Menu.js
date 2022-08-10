const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Menu = db.define('Menu', {
    title: {
        type: DataTypes.STRING
    }
})

module.exports = {Menu};