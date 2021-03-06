import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'
const router = express.Router();
import express from 'express'
//import {getProductById,getProducts} from '../controllers/productController.js'


//@desc desc fetch all products
//@route GET /api/product
//@access - access fetch all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // throw new Error('Some error')
    res.json(products)
}))

//router.route('/').get(getProducts)
////router.get('/',getProducts)

//@desc fetch single product
// @route GET /api/products/:id
//@access Public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

//router.route('/:id').get(getProductById)
////router.get('/:id',getProductById)


export default router;