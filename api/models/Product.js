const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true, unique: true },
    categories: { type: Array },
    size: { type: Array, required: true },
    instock: { type: Boolean, default: true },
    color: { type: Array },
    price: { type: Number, required: true }
  },
  {
    timestamps: true
  }

)

module.exports = mongoose.model('product', ProductSchema);