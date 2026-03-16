
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
