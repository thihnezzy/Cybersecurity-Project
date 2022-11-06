import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    },
    color: {
        type: String
    },
    available: { 
        type: Number, 
        required: true, 
        min: 0, 
        max: 1000 },
    created_at:{ 
        type: Date 
    },
    updated_at:{ 
        type: Date, default: Date.now 
    },
    updated:{
        type: Date, default: Date.now
    }
  },{strict: false});
// strict: false for when we need to add an object with more or less than 8 fields

  let ProductModel = mongoose.model('product',ProductSchema);

//   module.exports = ProductModel;

  export default ProductModel;
  