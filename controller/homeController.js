const express = require("express")
const fetch = require("node-fetch2")


exports.getHome = async (req, res, next) => {
    try {
        let data = {}
        const {
            hero
        } = req.query;

        if (hero) {
            data = await localApi(req.query.hero)
        }
        await res.status(200).render('home', {
            title: "Home",
            message: data?.message || "Search your favorite hero",  data,
            searchTerm: req.query.hero
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: "Spo bon",
        })
    }
}

const localApi = async (query) => await fetch(`https://www.superheroapi.com/api.php/10157652346894910/search/${query}`)
    .then(res => res.json())
    .catch((err) => {
        throw new Error('Failed to load Heroes')
    })


//Ktu eshte be pjes e queryt ku e marrim url se bashku me search dhe ${query} dhe kemi ateru mmbrenda ne data


