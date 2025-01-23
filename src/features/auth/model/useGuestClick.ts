import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { UserState } from '@/entities/User/model/User';
import { UserStateType } from '@/entities/User/model/types';

export const useGuestClick = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState<UserStateType>(UserState);

  const handleGuestClick = () => {
    setUser({
      email: 'guest',
      role: 'guest',
    });
    navigate('/');
  };

  return handleGuestClick;
};
