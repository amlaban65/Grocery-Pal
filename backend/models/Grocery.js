const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    calories: {
        type: Number
    }
},{timestamps: true});
module.exports = mongoose.model("Grocery", GrocerySchema);

