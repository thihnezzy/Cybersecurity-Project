import TransfertModel from "../models/transfert.js";
import UserModel from "../models/Users.js";
import jwt from 'jsonwebtoken';

export const getValidationTransfert = async (req,res) =>{

	var token = null;

	if (req.body.data['userMe'] == null) {
		res.json({auth: false, message: "You failed to authenticate", validation: false});
		return ;
	}
	else {
		token = req.body.data['userMe'].split('"')[1];
	}

	var userId = null;

    if(!token || token == "null"){
    	res.status(200).json({message: "You don't have token", validation: false});
    	return ;
    }else{
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if(!err){
                userId = decoded.username;
            } else {
            	res.json({auth: false, message: "You failed to authenticate", validation: false});
            	return ;
            }
        });
    }

	try {
		let user = req.body.data['user'];
		let pts = parseInt(req.body.data['points'], 10);
	
		const tmp = await UserModel.findOne({username: user});
		const tmp2 = await UserModel.findOne({username: userId});

		if (tmp2.score < pts) {
			res.status(200).json({message: 'Not enough points', validation: false});
			return ;
		}

		if(tmp) {
			res.status(200).json({
				validation: true,
				sender: userId,
				receiver: tmp.username,
				points: pts
			});
			return ;
		} else {
			res.status(200).json({message: 'User Not found', validation: false});
			return ;
		}

	} catch (error) {
		res.status(404).json({message: error.message, validation: false});
	}

}

export const setTransfert = async (req,res) =>{

	const sender = req.body.data['sender'];
	const receiver = req.body.data['receiver'];
	const points = req.body.data['points'];

	if(sender == null || receiver == null || points == null) {
		res.status(200).json({message: 'Bad arguments', status: false});
		return ;
	}

	try {

		const sender_user = await UserModel.findOne({username: sender});
		const receiver_user = await UserModel.findOne({username: receiver});

		if(!(sender_user) || !(receiver_user)) {
			res.status(200).json({message: "Bad users", status: false});
			return ;
		}

		var new_scrore_sender = sender_user['score'] - points;
		var new_score_receiver = receiver_user['score'] + points;

		await UserModel.findOneAndUpdate({username: sender}, { $set: { score: new_scrore_sender}});
		await UserModel.findOneAndUpdate({username: receiver}, { $set: { score: new_score_receiver}});

		var log_transfert = {
			src_name     : sender,
			dst_name     : receiver,
			pts_transfert: points
		};

		const new_log_transfert = new TransfertModel(log_transfert);
		await new_log_transfert.save();

		res.status(200).json({message: "OK", status: true});

	} catch (error) {
		res.status(404).json({message: error.message, status: false});
		return ;
	}

}












