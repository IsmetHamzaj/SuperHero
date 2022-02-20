const Favorite = require("../models/favoriteModel")
const fetch = require('node-fetch2')




const getFavorite = async (req, res, next) => {
    try {
        let heroesIDs = await Favorite.findAll()
        const heroes = []

        console.log('heores:', heroesIDs)

        heroesIDs.forEach((hero) => {
            fetch(`https://www.superheroapi.com/api.php/10157652346894910/${hero=heroesIDs.hero_id}`)
                .then((res) => {
                    heroes.push(res)
                })
        })
        
    await res.status(200).render('favorite', {
        title: "Favorites",
        para: "HI THIS IS THE FAVORITE",
        heroes,
    })
} catch (err) {
    res.status(400).json({
        status: "Failed",
        message: err.message,
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