import express from 'express';

import { getUser, registerUser, updateUser, deleteUser, getUsers, getUsersWithUsername, getUsersWithEmail, loginUser,changeScore, getScore } from '../controllers/usersController.js';
const router = express.Router();

router.get('/', getUsers);
router.get('/username/:username', getUsersWithUsername);
router.get('/email/:email', getUsersWithEmail);
router.post("/register",registerUser);
router.get("/:id", getUser);
router.put("/:id", changeScore);


router.get("/score/:id", getScore);
export default router;