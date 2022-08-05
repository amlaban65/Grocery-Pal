const express = require('express');
const { addGrocery, getAllGrocery, getGrocery, deleteGrocery, updateGrocery } = require('../controller/GroceryController.js');
const Grocery = require("../models/Grocery.js");

const router = express.Router();
//POST a new grocery item
router.post('/', addGrocery);

//GET grocery
router.get('/:id', getGrocery);

//GET ALL groceries
router.get('/', getAllGrocery);

//DELETE grocery
router.delete('/:id', deleteGrocery);

//UPDATE grocery
router.patch('/:id', updateGrocery);

module.exports = router;