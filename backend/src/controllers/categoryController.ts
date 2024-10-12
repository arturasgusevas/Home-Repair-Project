const Category = require('../models/Category');

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const addCategory = async (req, res) => {
  const {name, iconUrl, bgColor} = req.body;
  const category = new Category({name, iconUrl, bgColor});
  await category.save();
  res.status(201).json(category);
};

module.exports = {getCategories, addCategory};
