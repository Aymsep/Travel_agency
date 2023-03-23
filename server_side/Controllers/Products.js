const Product_db = require('../Schemas/Products')



exports.create_product = (req, res, next) => {
    const {title, description,price} = req.body
    const product = new Product_db({
        title:title,
        description:description,
        price:price,
        image:req.file.filename
    })
    product.save().then(()=>{
        console.log('product added successfully')
        return res.status(201).json({success:'product added successfully'})
    }).catch(err => {
        console.log('error creating product')
        return res.status(500).json({success:'error creating product'})
    })
}


exports.getAllProducts = (req, res, next) => {
    Product_db.find()
    .then((response)=>{
        return res.status(200).json({
            response
        })
    }).catch(err => {
        return res.status(500).json({
            message:'products not found'
        })
    })
}


// Product_db.collection.deleteMany({})