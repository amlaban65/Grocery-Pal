const express = require('express');
const { addGrocery, getAllGrocery, getGrocery, deleteGrocery, updateGrocery } = require('../controller/GroceryController.js');
const Grocery = require("../models/Grocery.js");
const requireAuth = require("../middleware/requireAuth.js");

const router = express.Router();

//ensure user is authenticated
router.use(requireAuth);
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