const Sequelize = require("sequelize");

const db = new Sequelize("favorite", "root", "", {
    dialect: "mysql",
    host: "localhost"
})


db.authenticate()
    .then(() => {
        console.log("Db connected successfuly")
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = db