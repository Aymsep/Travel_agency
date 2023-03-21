const express = require('express');
const router = express.Router();
const products = require('../Controllers/Products')

router.post('/create',products.create_product)

router.get('/serve',products.getAllProducts)


module.exports = router