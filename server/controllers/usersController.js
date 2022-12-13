import UserModel from '../models/Users.js';
import jwt from 'jsonwebtoken';
export const getUser = async (req,res) =>{
    try {
        const UserModelData = await UserModel.findById(req.params.id);
        res.status(200).json(UserModelData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
}

export const getUsers = async (req,res) =>{
    try {
        const {field} = req.body.field;
        const UserModelData = await UserModel.findById(field);

        res.status(200).json(UserModelData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
}

export const loginUser = async (req,res) => {
    try {
        const {username,password} =req.body;
        const user = await UserModel.findOne({username:username, password:password});
        if(user){
            const token = jwt.sign({id:user._id, username: user.username, password: user.password},process.env.JWT_KEY,{expiresIn: '1h'});
            res.status(200).json({message:"login successfully", user: token});
        }else{
            res.status(404).json({message:"wrong credentials", user:false});
        }
    }catch (err) {
        console.log(err);
        res.status(404).json({message: err.message});
    }
}

export const registerUser = async (req,res) =>{
    try {
        const user = req.body.data;
        const newUser = new UserModel(user);
        await newUser.save();
        res.status(200).json({message: "Successfully created an user"});   
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    const UserUpdated = req.body.User;
    const id = req.body.id;
    try {
        await UserModel.findByIdAndUpdate(id, UserUpdated, {new: true});
        res.redirect('/:id');
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }

}

export const deleteUser = async (req,res) =>{
    const {id} = req.params.id;
    const User = await UserModel.findByIdAndRemove(id);
    res.redirect('/');
}

export const getUsersWithUsername = async (req,res) =>{
    try {
        const user = req.params.username;
        const UserModelData = await UserModel.find({username: user});
        if (UserModelData.length === 0){
            res.status(200).json({isExisted: false});
        }else{
            res.status(200).json({isExisted: true, password: UserModelData[0].password});   
        }
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const getUsersWithEmail = async (req,res) =>{
    try {
        const user = req.params.email;
        const UserModelData = await UserModel.find({email:user});
        if (UserModelData.length === 0){
            res.status(202).json({isExisted: false});}
        else{
            res.status(200).json({isExisted: true});   
        }
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const changeScore = async (req,res) =>{
    try {
        const score = req.body.data;
        const {id} = req.params;
        console.log(score,id);
        await UserModel.findOneAndUpdate({_id:id}, { $inc: { score: score}});
        res.status(200).json({message:"ok"});
    }catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const getScore = async (req,res) =>{
    try {
        const {id} = req.params;
        const user = await UserModel.findOne({_id:id});
        res.status(200).json({score: user.score});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}