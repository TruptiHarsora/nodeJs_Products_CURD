const mongooes = require("mongoose");

const ProductSchema = mongooes.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category:{type: String},
    image:{type:String}
})

module.exports = mongooes.model("Products",ProductSchema);