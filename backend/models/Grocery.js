const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    notes: {
        type: String
    },
    calories: {
        type: Number
    }
},{timestamps: true});
module.exports = mongoose.model("Grocery", GrocerySchema);

