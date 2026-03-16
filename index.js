<<<<<<< HEAD

const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/", productRoutes);
app.use("/", categoryRoutes);
app.use("/", orderRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`E-commerce backend running on port ${PORT}`);
});
=======
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// -------------------- PRODUCTS DATA --------------------

let products = [
{
id: 1,
productName: "Wireless Mouse",
price: 799,
category: "Electronics",
stock: 10
},
{
id: 2,
productName: "Keyboard",
price: 999,
category: "Electronics",
stock: 5
}
];

// -------------------- CATEGORY DATA --------------------

let categories = [
{ id: 1, name: "Electronics" },
{ id: 2, name: "Clothing" }
];

// -------------------- ORDERS DATA --------------------

let orders = [];


// ================= PRODUCTS APIs =================

// GET all products
app.get("/products", (req, res) => {
res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
const product = products.find(p => p.id == req.params.id);

if(!product){
return res.status(404).json({message:"Product not found"});
}

res.json(product);
});

// ADD product
app.post("/products", (req, res) => {

const { productName, price, category, stock } = req.body;

if(!productName || !price || !category || !stock){
return res.status(400).json({message:"All fields required"});
}

const newProduct = {
id: products.length + 1,
productName,
price,
category,
stock
};

products.push(newProduct);

res.status(201).json({
message:"Product added successfully",
product:newProduct
});

});

// UPDATE product
app.put("/products/:id", (req, res) => {

const product = products.find(p => p.id == req.params.id);

if(!product){
return res.status(404).json({message:"Product not found"});
}

const { productName, price, category, stock } = req.body;

product.productName = productName || product.productName;
product.price = price || product.price;
product.category = category || product.category;
product.stock = stock || product.stock;

res.json({
message:"Product updated successfully",
product
});

});

// DELETE product
app.delete("/products/:id", (req, res) => {

const index = products.findIndex(p => p.id == req.params.id);

if(index === -1){
return res.status(404).json({message:"Product not found"});
}

products.splice(index,1);

res.json({message:"Product deleted successfully"});
});


// ================= CATEGORY APIs =================

// GET categories
app.get("/categories", (req,res)=>{
res.json(categories);
});

// ADD category
app.post("/categories",(req,res)=>{

const {name} = req.body;

if(!name){
return res.status(400).json({message:"Category name required"});
}

const newCategory = {
id: categories.length + 1,
name
};

categories.push(newCategory);

res.status(201).json({
message:"Category added",
category:newCategory
});

});


// ================= ORDER APIs =================

// CREATE order
app.post("/orders",(req,res)=>{

const {productId, quantity} = req.body;

const product = products.find(p=>p.id == productId);

if(!product){
return res.status(404).json({message:"Product not found"});
}

if(product.stock < quantity){
return res.status(400).json({message:"Insufficient stock"});
}

product.stock -= quantity;

const order = {
id: orders.length + 1,
productId,
quantity
};

orders.push(order);

res.status(201).json({
message:"Order created successfully",
order
});

});


// ================= START SERVER =================

app.listen(PORT, ()=>{
console.log(`Server running at http://localhost:${PORT}`);
});
>>>>>>> dd6b0af086bd89e2608b03f49b25c49cb7e2b553
