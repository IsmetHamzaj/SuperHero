const Favorite = require("../models/favoriteModel")
const fetch = require('node-fetch2')




const getFavorite = async (req, res, next) => {
    let model = await Favorite.findAll()
    try {
        let data = {}
        const {
            heroid
        } = req.hero;

        if (heroid) {
            data = await hero(req.hero.heroid)
        }
        await res.status(200).render('favorite', {
            title: "Favorites",
            para: "HI THIS IS THE FAVORITE",
            model,
            message: data?.message ,  data
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message,
        })
    }
}

const hero = async (hero) => await fetch(`https://www.superheroapi.com/api.php/10157652346894910/${hero}`)
    .then(res => res.json())
    .catch((err) => {
        throw new Error('Failed to load Heroes')
    })


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
                res.status(200).json({
                    status: "Failed",
                    message: "This favorite doesnt exist"
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                status: "Failed",
            })
        })
}

const addFavorite = (req, res) => {
    Favorite.create({
            hero_id: req.body.hero_id,
            // name: req.body.name,
            // full_name: req.body.full_name,
            // alignment: req.body.alignment,
            // race: req.body.race,
            // img: req.body.img
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
           res.redirect('/')
        });
};

module.exports = {
    getFavorite,
    addFavorite,
    removeFavorites
}