import {Request, Response} from 'express';
import Category from '../models/Category';

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({message: 'Failed to retrieve categories'});
  }
};

export const addCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {name, iconUrl, bgColor} = req.body;
    const category = new Category({name, iconUrl, bgColor});
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({message: 'Failed to add category'});
  }
};
