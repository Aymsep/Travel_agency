const express = require('express');
const router = express.Router();
const products = require('../Controllers/Products')

const upload_file = require('../Middleware/multer')





router.post('/create',upload_file,products.create_product)

router.get('/serve',products.getAllProducts)

router.get('/details/:id',products.getOneProduct)


module.exports = router