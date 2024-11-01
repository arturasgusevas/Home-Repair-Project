import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Category} from '../types/category';

const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get('http://localhost:5000/categories');
  return response.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });
};
