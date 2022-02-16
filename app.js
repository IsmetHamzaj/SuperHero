//Required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const model = require("./models/favoriteModel")



const app = express();



//Requeired files
const homeRoutes = require("./routes/homeRoutes")
const favoriteRoutes = require("./routes/favoriteRoutes")

const db = require("./database")


db.sync({force: true})


//Middle configuration
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use(express.json());


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


// app.use(morgan('dev'))


app.set('view engine', 'pug');


app.use(express.static(`${__dirname}/public`))


//Routes
app.use("/", homeRoutes)
app.use("/", favoriteRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})