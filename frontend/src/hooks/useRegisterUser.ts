import {useMutation, UseMutationResult} from '@tanstack/react-query';
import axios from 'axios';
import {User} from '../types/users';

const registerUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await axios.post(
    'http://localhost:5000/auth/register',
    user
  );
  return response.data;
};

const mutationOptions = {
  mutationFn: registerUser
};

export const useRegisterUser = (): UseMutationResult<
  User,
  Error,
  Omit<User, 'id'>
> => {
  return useMutation<User, Error, Omit<User, 'id'>>(mutationOptions);
};
