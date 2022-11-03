import express from "express";

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";

const router = express.Router();

//get Product (R)
router.get('/', getProducts);
//new Product (C)
router.post('/', createProduct);
//update Product (U)
router.put('/',updateProduct);
//delete Product (D)
router.delete('/:id',deleteProduct);


export default router;