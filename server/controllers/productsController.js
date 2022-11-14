import ProductModel from "../models/Products.js";

export const getProducts = async (req,res) =>{
    try {

        const ProductModelData = await ProductModel.find({})
        res.status(200).json(ProductModelData);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
}

export const createProduct = async (req,res) =>{
    const Product = req.body;

    const newProduct = new ProductModel(Product);

    try {
        await newProduct.save();    
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(201).json({message: error.message});
    }
    res.send('Product Created');
}

export const updateProduct = async (req, res) => {
    const ProductUpdated = req.body.Product;
    const id = req.body.id;
    try {
        await ProductModel.findByIdAndUpdate(id, ProductUpdated, {new: true});
        res.redirect('/:id');
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }

}

export const deleteProduct = async (req,res) =>{
    const {id} = req.params.id;
    const Product = await ProductModel.findByIdAndRemove(id);
    res.redirect('/');
}