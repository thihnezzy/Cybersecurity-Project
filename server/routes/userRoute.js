import express from 'express';

import { getUser, registerUser, updateUser, deleteUser } from '../controllers/usersController.js';
const router = express.Router();


router.post("/register",registerUser);
router.get("/:id", getUser)

export default router;