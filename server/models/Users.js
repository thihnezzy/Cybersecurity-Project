import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

//Where is '../config file'
// import secret from '../config';


// const UserSchema = new mongoose.Schema({
//   username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
//   email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//   image: String,
//   hash: String,
//   salt: String
// }, {timestamps: true});

const UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  // image: [String],
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  score: {
    type: Number,
    min: 0,
    default: 0
  }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// UserSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   };

// UserSchema.methods.validPassword = function(password) {
//     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
//     };

// UserSchema.methods.generateJWT = function() {
//     const today = new Date();
//     const exp = new Date(today);
//     exp.setDate(today.getDate() + 60);
    
//     return jwt.sign({
//       id: this._id,
//       username: this.username,
//       exp: parseInt(exp.getTime() / 1000),
//       }, secret);
//       };

// UserSchema.methods.toAuthJSON = function(){
//     return {
//         username: this.username,
//         email: this.email,
//         token: this.generateJWT(),
//         bio: this.bio,
//         image: this.image
//           };
//         };

let UserModel = mongoose.model('User', UserSchema);
// don't forget to add require('./models/Users'); to app.js

export default UserModel;