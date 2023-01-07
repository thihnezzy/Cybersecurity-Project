import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"] , index: true},
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

let UserModel = mongoose.model('User', UserSchema);

export default UserModel;