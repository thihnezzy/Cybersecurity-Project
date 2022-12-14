import express from 'express';
import {getAuthRoute, loginUser} from '../controllers/authRouteControllers.js'
const router = express.Router();

router.get('/', getAuthRoute);
router.post('/login', loginUser);
export default router;

