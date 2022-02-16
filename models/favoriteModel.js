const db = require("./../database")
const Sequelize = require("sequelize")


const Favorite = db.define("favorites", {
    hero_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})


module.exports = Favorite