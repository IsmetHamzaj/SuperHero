const express = require('express');
const router = express.Router()
const {
    getFavorite,
    addFavorite,
    removeFavorites
} = require("../controller/favoriteController")

router.get("/favorite", getFavorite)
router.post("/addfavorite", addFavorite)
router.post("/:id", removeFavorites)



module.exports = router