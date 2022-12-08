import express from "express";

import { getProducts, createProduct, updateProduct, deleteProduct ,getSingleProductData, getProductsWithSearchTerm} from "../controllers/productsController.js";

const router = express.Router();

//get Product (R)
router.get('/', getProducts);
router.get('/:id', getSingleProductData);
router.get('/search/:params', getProductsWithSearchTerm);
//new Product (C)
router.post('/new-product', createProduct);
//update Product (U)
router.put('/:id',updateProduct);
//delete Product (D)
router.delete('/:id',deleteProduct);


export default router;