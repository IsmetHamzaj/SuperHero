const express = require('express');
const router = express.Router()
const {
    getFavorite,
    addFavorite,
    removeFavorites
} = require("../controller/favoriteController")

router.post("/:id", removeFavorites)
router.get("/favorite", getFavorite)
router.post("/addfavorite", addFavorite)



module.exports = router