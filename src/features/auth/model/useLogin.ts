import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserState } from '@/entities/User/model/User';
import { UserStateType } from '@/entities/User/model/types';
import { login, useRoute } from '@/features/auth';

export const useLogin = () => {
  const [error, setError] = useState('');
  const [, setUser] = useRecoilState<UserStateType>(UserState);
  const { goToHome } = useRoute();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login({ email, password });
      setUser({
        email: email,
        role: 'authenticated',
      });
      goToHome();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { handleLogin, error };
};
