const db = require("./../database")
const Sequelize = require("sequelize")


const Favorite = db.define("favorites", {
    hero_Id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})


module.exports = Favorite