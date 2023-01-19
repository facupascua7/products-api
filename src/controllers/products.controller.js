import Product from '../models/Product';

export const createProduct = (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const product = Product({ name, category, price, imgURL });

  product
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
};

export const getProducts = (req, res) => {
  Product
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
};

export const getProductById = (req, res) => {
  const { productId } = req.params;
  Product
    .findById(productId)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
};

export const updateProductById = (req, res) => {
  const { productId } = req.params;
  const { name, category, price, imgURL } = req.body;
  Product
    .updateOne({ _id: productId }, { $set: {name, category, price, imgURL} })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
};

export const deleteProductById = (req, res) => {
  const { productId } = req.params;
  Product
    .remove({ _id: productId })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
};