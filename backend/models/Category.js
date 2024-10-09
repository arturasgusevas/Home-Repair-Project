const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  iconUrl: {type: String, required: true},
  bgColor: {type: String, required: true}
});

module.exports = mongoose.model('Category', categorySchema);
