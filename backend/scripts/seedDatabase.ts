import mongoose from 'mongoose';
import 'dotenv/config';
import {config} from 'dotenv';
import process from 'process';

config();

import Category from '../src/models/Category';
import Business from '../src/models/Business';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected...');
  } catch (error: any) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

const seedCategories = async () => {
  const categories = [
    {name: 'Cleaning', iconUrl: 'cleaning-icon-url', bgColor: '#f0f0f0'},
    {name: 'Repair', iconUrl: 'repair-icon-url', bgColor: '#f0f0f0'},
    {name: 'Painting', iconUrl: 'painting-icon-url', bgColor: '#f0f0f0'},
    {name: 'Shifting', iconUrl: 'shifting-icon-url', bgColor: '#f0f0f0'},
    {name: 'Plumbing', iconUrl: 'plumbing-icon-url', bgColor: '#f0f0f0'},
    {name: 'Electrical', iconUrl: 'electrical-icon-url', bgColor: '#f0f0f0'}
  ];

  await Category.insertMany(categories);
  console.log('Categories seeded successfully.');
};

const seedBusinesses = async () => {
  const businesses = [
    {
      name: 'CleanCo',
      description: 'Expert Cleaning Service',
      address: '123 Main St, Cityville',
      category: 'Cleaning',
      contactPerson: 'John Doe',
      email: 'contact@cleanco.com',
      photos: ['https://picsum.photos/400/300?random=1']
    },
    {
      name: 'FixItPlumbers',
      description: 'Plumbing Repair Service',
      address: '456 Elm St, Townville',
      category: 'Plumbing',
      contactPerson: 'Jane Smith',
      email: 'contact@fixitplumbers.com',
      photos: ['https://picsum.photos/400/300?random=2']
    }
  ];

  await Business.insertMany(businesses);
  console.log('Businesses seeded successfully.');
};

const seedDatabase = async () => {
  await connectDB();
  if (mongoose.connection && mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
  } else {
    console.error(
      'Database connection is not established. Make sure MongoDB is running.'
    );
    process.exit(1);
  }
  await seedCategories();
  await seedBusinesses();
  process.exit(0);
};

seedDatabase().catch((error) => {
  console.error('Failed to seed database', error);
  process.exit(1);
});
