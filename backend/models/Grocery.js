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
    },
    notes: {
        type: String
    },
    calories: {
        type: Number
    }, 
    user_id: {
        type: String,
        required: true
      }
},{timestamps: true});
module.exports = mongoose.model("Grocery", GrocerySchema);

