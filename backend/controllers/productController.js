// import Product from "../models/productModel";
// import asyncHandler from "express-async-handler";
// import expressAsyncHandler from "express-async-handler";


// // desc fetch all products
// // get /api/product
// // access fetch all products
// const getProducts = expressAsyncHandler(async(req,res)=>{
//     const products=await Product.find({})

//     res.json(products)
// })


// //@desc fetch single product
// //@route GET /api/products/:id
// //@access Public

// const getProductById = expressAsyncHandler(async (req,res)=>{
//     const product = await Product.findById(req.params.id)

//     if (product) {
//         res.json(product)
//     }
//     else {
//         res.status(404)
//         throw new Error('Product not found')
//     }
// })

// export {getProductById,getProducts} 