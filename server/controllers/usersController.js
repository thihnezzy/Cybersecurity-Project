import UserModel from '../models/Users.js';

export const getUser = async (req,res) =>{
    try {
        const UserModelData = await UserModel.findById(req.params.id);
        res.status(200).json(UserModelData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
}

export const registerUser = async (req,res) =>{
    const User = req.body;

    const newUser = new UserModel(User);

    try {
        await newUser.save();    
        res.status(201).json(newUser);
    } catch (error) {
        res.status(201).json({message: error.message});
    }
    res.send('User Created');
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
