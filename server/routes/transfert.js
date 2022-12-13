import express from "express";
import { getValidationTransfert, setTransfert } from "../controllers/transfertControllers.js";

const router = express.Router();

router.post('/validation', getValidationTransfert);
router.post('/makeTransfert', setTransfert);

export default router;