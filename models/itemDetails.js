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


//item.json
[
    {
        name: 'Nike',
        description: 'Short Homme Flex Noir Cod CZ2576-010',
        price: 46.65 ,
        image: 'https://m.media-amazon.com/images/I/61KVnTbcAUS._AC_UL480_QL65_.jpg',
        category: 'Vêtements de sport',
        createdAt: 08/10/2021,

    }

    ,{
        name: 'Nike',
        description: 'Nike Dri-fit Stride Short-2 en 1, Gris fumé/Gris fumé DK/Argent réfléchissant',
        price: 59.65 ,
        image: 'https://m.media-amazon.com/images/I/61idPcLkMIL._AC_UL480_FMwebp_QL65_.jpg',
        category: 'Vêtements de sport',
        createdAt: 19/09/2022,
    },

    {
        name: 'Nike',
        description: 'Liverpool Football Club Season 2022/23 Official Away - Shorts - Sport - Homme',
        price: 39.99,
        image: 'https://m.media-amazon.com/images/I/713bPeTnpiL._AC_UX342_.jpg',
        category: 'Vêtements de sport',
        createdAt: 02/06/2022,
    },

    {
        name: 'Nike',
        description: 'Nike Dri-fit Shorts Homme',
        price: 59.22,
        image: 'https://m.media-amazon.com/images/I/51tv8M7ywwL._AC_UL480_FMwebp_QL65_.jpg',
        category: 'Vêtements de sport',
        createdAt: 11/05/2021,
    },

    {
        name: 'Nike',
        description: 'Nike Short Blanc Homme Air Max',
        price: 47.19,
        image: 'https://m.media-amazon.com/images/I/51gVUgvx2UL._AC_UL480_FMwebp_QL65_.jpg',
        category: 'Vêtements de sport',
        createdAt: 26/09/2022,
    },

    {
        name: 'Nike',
        description: 'Nike Sportswear Club - Pantalon De Jogging - Pantalon De Jogging - Homme',
        price: 51.15,
        image: 'https://m.media-amazon.com/images/I/61MnlQXgfbL._AC_UX385_.jpg',
        category: 'Vêtements de sport',
        createdAt: 08/01/2021,
    },

    {
        name: 'Nike',
        description: 'DF Chlnr Short Homme',
        price: 37.95,
        image: 'https://m.media-amazon.com/images/I/51gVUgvx2UL._AC_UL480_FMwebp_QL65_.jpg',
        category: 'Vêtements de sport',
        createdAt: 26/09/2022,
    },

    {
        name: 'Nike',
        description: 'Nike Short Blanc Homme Air Max',
        price: 47.19,
        image: 'https://m.media-amazon.com/images/I/7167Wm9DoML._AC_UX569_.jpg',
        category: 'Vêtements de sport',
        createdAt: 27/05/2022,
    },

    {
        name: 'Nike',
        description: 'Chaussures Air Force 1 07 ',
        price: 179.00,
        image: 'https://m.media-amazon.com/images/I/51e2YguCPtL._AC_UX395_.jpg',
        category: 'Vêtements de sport',
        createdAt: 12/08/2021,
    },

    {
        name: 'Nike',
        description: 'Nike W Af1 Pixel, Chaussure de Gymnastique Femme',
        price: 160.99,
        image: 'https://m.media-amazon.com/images/I/81CcsaBmLHL._AC_UX500_.jpg',
        category: 'Vêtements de sport',
        createdAt: 18/11/2020,
    },

]

