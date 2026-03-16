
const { categories } = require("../data/store");

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.createCategory = (req, res) => {
  const { name } = req.body;

  if(!name){
    return res.status(400).json({message:"Category name required"})
  }

  const category = {
    id: categories.length + 1,
    name
  };

  categories.push(category);
  res.status(201).json(category);
};
