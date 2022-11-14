import express from "express";

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";

const router = express.Router();

//get Product (R)
router.get('/', getProducts);
//new Product (C)
router.post('/new-product', createProduct);
//update Product (U)
router.put('/:id',updateProduct);
//delete Product (D)
router.delete('/:id',deleteProduct);


export default router;