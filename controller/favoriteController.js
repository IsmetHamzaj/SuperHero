const Favorite = require("../models/favoriteModel")
const fetch = require('node-fetch2')

const getFavorite = async (req, res ,next) => {
    let model = await Favorite.findAll()
    try {
        res.status(200).render('favorite', {
            title: "Favorites",
            para: "HI THIS IS THE FAVORITE",
            model
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

const removeFavorites = (req, res) => {
    let id = req.body.id
    Favorite.findOne({
            where: {
                id: id
            }
        })
        .then((removed) => {
            if (removed) {
                removed.destroy()
                res.redirect('/favorite')
            } else {
                res.status(200).json({
                    status: "Failed",
                    message: "This favorite doesnt exist"
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                status: "Failed",
                message: message.err
            })
        })
}

const addFavorite = (req, res) => {
    Favorite.create({
      hero_id: req.body.hero_id,
    })
      .then(() => {
        res.status(200).json({
          status: "Success",
          message: "Hero Added Successfuly",
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "Failed",
          message: err.message,
        });
      });
  };

module.exports = {
    getFavorite,
    addFavorite,
    removeFavorites
}