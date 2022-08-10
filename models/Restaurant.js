const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Restaurant = db.define('restaurant', {
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING
    },
    cuisine: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }
} )

async function main () {

    await Restaurant.sync({ force: true })

    await Restaurant.create({
        name: "McDonalds",
        location: "Manchester",
        cuisine: "American"
    })
    await Restaurant.create({
        name: "Nando's",
        location: "Salford",
        cuisine: "Chicken"
    })

    const data = await Restaurant.findAll()
    console.log(data)

    await Restaurant.destroy({
        where: {
            name: "McDonalds"
        }
    })
    const data2 = await Restaurant.findOne()
    console.log(data2.toJSON())
}

// main()
module.exports = {Restaurant};