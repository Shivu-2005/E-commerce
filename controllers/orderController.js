
const { orders, products } = require("../data/store");

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {

  const { productId, quantity } = req.body;

  const product = products.find(p => p.id == productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  if (product.stock < quantity) {
    return res.status(400).json({
      message: "Not enough stock"
    });
  }

  const totalPrice = product.price * quantity;

  const order = {
    id: orders.length + 1,
    productId,
    quantity,
    totalPrice
  };

  orders.push(order);

  product.stock -= quantity;

  res.status(201).json({
    message: "Order created",
    order
  });
};
