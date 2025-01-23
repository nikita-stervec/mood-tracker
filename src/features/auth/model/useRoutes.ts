import { useNavigate } from 'react-router-dom';

export const useRoute = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');
  const goToHome = () => navigate('/');

  return { goToLogin, goToRegister, goToHome };
};
