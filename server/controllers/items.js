import ItemDetails from "../models/itemDetails.js";

export const getItems = async (req,res) =>{
    try {
        const itemDetails = await ItemDetails.find();
        console.log(itemDetails);
        res.status(200).json(itemDetails);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
}

export const createItem = async (req,res) =>{
    const item = req.body;

    const newItem = new ItemDetails(item);

    try {
        await newItem.save();    
        res.status(201).json(newItem);
    } catch (error) {
        res.status(201).json({message: error.message});
    }
    res.send('Item Created');
}