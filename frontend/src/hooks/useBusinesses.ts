import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Business} from '../types/business';

const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axios.get('http://localhost:5000/businesses');
  return response.data;
};

export const useBusinesses = () => {
  return useQuery({queryKey: ['businesses'], queryFn: fetchBusinesses});
};
