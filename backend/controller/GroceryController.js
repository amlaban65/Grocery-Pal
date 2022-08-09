const Grocery = require("../models/Grocery.js");

//get all groceries
const getAllGrocery = async(req, res) => {
    const user_id = req.user._id
    const groceries = await Grocery.find({ user_id }).sort({updatedAt: -1})
    res.status(200).json(groceries);
}

//get single grocery
const getGrocery = async(req, res) => {
    const { id } = req.params;
    try {
    const grocery = await Grocery.findById(id);
    if (!grocery) return res.status(404).send("Not found!");
    res.status(200).json(grocery);
    } catch (err) {
        return res.status(404).send("Not found!");
    }
}
//create a grocery item
const addGrocery = async(req, res) => {
    const{name, tags, quantity, calories, notes} = req.body;
    const user_id = req.user._id
    const checkIfExists = await Grocery.findOne({name:name, user_id: user_id});
    if (checkIfExists) {
        //if item exists, increment quantity
        if (!checkIfExists.quantity) checkIfExists.quantity = 1;
        const grocery = await Grocery.findOneAndUpdate({name: name, user_id: user_id}, {quantity: 
            checkIfExists.quantity + 1}, {new: true});
        return res.status(200).send(grocery);
    }
    if (quantity < 0) {
        return res.status(400).json({error: "Please enter a valid quantity"});
    }
    if (calories < 0) {
        return res.status(400).json({error:"Please enter a valid number"});
    }
    try {
        const grocery = await Grocery.create({name, tags, quantity, calories, notes, user_id});
        res.status(200).json(grocery);
    } catch (err) {
        console.log(err);
        res.status(400).json({error: '"Name" is required'});
    }
};
//delete a grocery item
const deleteGrocery = async(req, res) => {
    const { id } = req.params;
    try {
        const grocery =  await Grocery.findByIdAndDelete(id);
        if (!grocery) return res.status(404).json("Not found!");
        res.status(200).json(grocery);
    } catch(err) {
        res.status(404).json("Not found!");
    }
}
// update a grocery item
const updateGrocery = async(req, res) => {
    const { id } = req.params;
    try {
        const grocery = await Grocery.findOneAndUpdate({_id: id}, {
            ...req.body
            
        }, {new:true});
        if (!grocery) {
            return res.status(404).send("Not found!");
        }
        return res.status(200).json(grocery);
    } catch(err) {
        res.status(404).send("Not found!");
    }
};

module.exports= {
    getAllGrocery,
    getGrocery,
    addGrocery,
    deleteGrocery,
    updateGrocery
}