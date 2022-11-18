import jwt from 'jsonwebtoken';
import UserModel from '../models/Users.js';
const verifyJWT = (req,res,next) =>{
    const token = req.headers["x-access-token"];
    if(!token){
        res.send("You need to login");
    }else{
        jwt.verify(token,process.env.JWT_KEY, (err,decoded) =>{
            if(err){
                res.json({auth: false, message: "You failed to authenticate"});
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
}

export const getAuthRoute = ('/auth-home', verifyJWT,(req, res) => {

    try {
        res.status(200).json({message: "You are authenticated"});
    } catch (error) {
        res.status(404).json({message: error.message});
    }

})

export const loginUser = (async(req,res) => {
    try {
        const {username,password} =req.body;
        const user = await UserModel.findOne({username:username});
        console.log(user);
        if(user.password === password){
            console.log(user);
            const token = jwt.sign({id:user._id, username: user.username, password: user.password},process.env.JWT_KEY,{expiresIn: '1h'});
            res.status(200).json({message:"login successfully", user: token});
        }else{
            res.status(200).json({message:"wrong password", user:false});
        }
    }catch (err) {
        res.status(404).json({message: err.message});
    }
});

