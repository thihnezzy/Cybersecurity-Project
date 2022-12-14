import UserModel from './models/Users.js';
import express  from 'express';
const router = express.Router();
export const list = async(req,res)=>{
    
    const data = await UserModel.find({});
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json([]);
    }
}
router.get("/receive",list);

export default router;
