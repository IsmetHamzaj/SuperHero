const db = require("./../database")
const Sequelize = require("sequelize")


const Favorite = db.define("favorites", {
    hero_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    // name: {
    //     type: Sequelize.STRING,
    //     allowNull: true,
    // },
    // full_name: {
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
    // alignment: {
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
    // race: {
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
    // img: {
    //     type: Sequelize.BLOB,
    //     allowNull: true
    // }
})


module.exports = Favorite