import { Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: React.CSSProperties['fontWeight'];
  gradient?: {
    from: string;
    to: string;
    deg: number;
  };
}

export const TextLogo = ({
  size = 'xl',
  weight = 700,
  gradient = {
    from: '#7B68EE',
    to: '#9680f2',
    deg: 90,
  },
}: LogoProps) => {
  const navigate = useNavigate();

  return (
    <Text
      onClick={() => navigate('/')}
      fw={weight}
      size={size}
      variant={gradient ? 'gradient' : 'text'}
      gradient={gradient}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      Mood Tracker
    </Text>
  );
};
