import express from 'express';

import { getUser, registerUser, updateUser, deleteUser, getUsers, getUsersWithUsername, getUsersWithEmail, loginUser } from '../controllers/usersController.js';
const router = express.Router();

router.get('/', getUsers);
router.get('/username/:username', getUsersWithUsername);
router.get('/email/:email', getUsersWithEmail);
router.post('/login', loginUser);
router.post("/register",registerUser);
router.get("/:id", getUser)

export default router;