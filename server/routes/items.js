import express from "express";

import { getItems, createItem, updateItem, deleteItem } from "../controllers/productsController.js";

const router = express.Router();

//get item (R)
router.get('/', getItems);
//new item (C)
router.post('/', createItem);
//update item (U)
router.put('/',updateItem);
//delete item (D)
router.delete('/:id',deleteItem);


export default router;