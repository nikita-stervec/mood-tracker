import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserState } from '@/entities/User/model/User';
import { UserStateType } from '@/entities/User/model/types';
import { register, useRoute } from '@/features/auth';

export const useRegister = () => {
  const [error, setError] = useState('');
  const [, setUser] = useRecoilState<UserStateType>(UserState);
  const { goToHome } = useRoute();

  const handleRegister = async (email: string, password: string) => {
    try {
      await register({ email, password });
      setUser({
        email: email,
        role: 'authenticated',
      });
      goToHome();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { handleRegister, error };
};
