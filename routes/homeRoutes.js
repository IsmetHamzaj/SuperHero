const express = require('express');
const router = express.Router();
const homeController = require("./../controller/homeController")

router.get("/", homeController.getHome)


// router.get("/api/search", homeController.localApi)


module.exports = router;