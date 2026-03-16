
let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, categoryId: 1 },
  { id: 2, name: "Mobile", price: 8000, stock: 5, categoryId: 1 }
];

let categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" }
];

let orders = [];

module.exports = { products, categories, orders };
