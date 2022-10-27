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

export const updateItem = async (req, res) => {
    const itemUpdated = req.body.item;
    const id = req.body.id;
    try {
        await ItemDetails.findByIdAndUpdate(id, itemUpdated, {new: true});
        res.redirect('/:id');
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }

}

export const deleteItem = async (req,res) =>{
    const {id} = req.params.id;
    const item = await ItemDetails.findByIdAndRemove(id);
    res.redirect('/');
}