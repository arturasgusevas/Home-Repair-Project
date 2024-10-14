import {Request, Response} from 'express';
import Business from '../models/Business';

export const getBusinesses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({message: 'Failed to retrieve businesses'});
  }
};

export const getBusinessesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {category} = req.params;
    const businesses = await Business.find({category});
    res.json(businesses);
  } catch (error) {
    res
      .status(500)
      .json({message: 'Failed to retrieve businesses by category'});
  }
};

export const getBusinessById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      res.status(404).json({message: 'Business not found'});
    } else {
      res.json(business);
    }
  } catch (error) {
    res.status(500).json({message: 'Failed to retrieve business'});
  }
};

export const addBusiness = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
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
  } catch (error) {
    res.status(500).json({message: 'Failed to add business'});
  }
};
