const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  address: {type: String, required: true},
  category: {type: String, required: true},
  contactPerson: {type: String, required: true},
  email: {type: String, required: true},
  photos: [String]
});

module.exports = mongoose.model('Business', businessSchema);
