const express = require ('express')
router= express.Router
const mainController = require ('../controllers/mainController')
router.get('/' , mainController.index)
router.get('/detalle/:menuId' , mainController.detalle)

module.exports= router