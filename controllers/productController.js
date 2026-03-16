
const { products } = require("../data/store");

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const { name, price, stock, categoryId } = req.body;

  if(!name || !price || !stock){
    return res.status(400).json({message:"name, price and stock required"})
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    stock,
    categoryId
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};
