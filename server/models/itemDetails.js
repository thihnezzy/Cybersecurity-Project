import mongoose from 'mongoose';

const itemDetailsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: [String],
    quantity: Number,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

export default ItemDetails;