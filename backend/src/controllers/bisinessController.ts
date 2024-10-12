const Business = require('../models/Business');

const getBusinesses = async (req, res) => {
  const businesses = await Business.find();
  res.json(businesses);
};

const getBusinessesByCategory = async (req, res) => {
  const {category} = req.params;
  const businesses = await Business.find({category});
  res.json(businesses);
};

const getBusinessById = async (req, res) => {
  const business = await Business.findById(req.params.id);
  res.json(business);
};

const addBusiness = async (req, res) => {
  const {name, description, address, category, contactPerson, email, photos} =
    req.body;
  const business = new Business({
    name,
    description,
    address,
    category,
    contactPerson,
    email,
    photos
  });
  await business.save();
  res.status(201).json(business);
};

module.exports = {
  getBusinesses,
  getBusinessesByCategory,
  getBusinessById,
  addBusiness
};
