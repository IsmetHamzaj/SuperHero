const Favorite = require("../models/favoriteModel")
const fetch = require('node-fetch2')


const getHeroid = (req, res, id) => {
    const data = fetch(`https://www.superheroapi.com/api.php/10157652346894910/${id}`)
}

const getFavorite = async (req, res, id ,next) => {
    let model = await Favorite.findAll()
    try {
        let superhero = {}
        const {
            heroid
        } =req.id
        if(heroid) {
            superhero = await getHeroid(req.id.heroid)
        }

        res.status(200).render('favorite', {
            title: "Favorites",
            para: "HI THIS IS THE FAVORITE",
            model,
            heroId: req.id.heroid
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const removeFavorites = (req, res) => {
    let id = req.params.id
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
                res.status(400).json({
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
            id: req.body.id
        })
        .then((addedFavorite) => {
            res.status(200).json({
                status: "Success",
                message: "Here is the data",
                data: addedFavorite
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Failed",
                message: err.message
            })
        })
}

module.exports = {
    getFavorite,
    addFavorite,
    removeFavorites
}