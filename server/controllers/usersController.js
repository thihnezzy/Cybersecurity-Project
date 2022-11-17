import UserModel from '../models/Users.js';

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
        await User.findOne({username:username},(err,user)=>{
        if(user){
           if(password === user.password){
               res.status(200).json({message:"login successfully"});
           }else{
               res.status({message:"wrong credentials"})
           }
        }})
    }catch (err) {
        res.status(404).json({message: error.message});
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