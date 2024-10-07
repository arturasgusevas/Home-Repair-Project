const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failes', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;