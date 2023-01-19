import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imgURL: String
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Product', productSchema);