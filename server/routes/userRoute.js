import express from 'express';

import { getUser, registerUser, updateUser, deleteUser } from '../controllers/usersController';
const router = express.Router();

const registerUser = () => {};

router.post("/register",registerUser);
router.get("/:id", getUser)

export default router;