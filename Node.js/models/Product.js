const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    price: Number,
    manufacturer: String
});

module.exports = mongoose.model('product', ProductSchema);