import { Button, type ButtonProps } from '@mantine/core';

interface SimpleButtonProps extends ButtonProps {
  children: string;
  wide?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const SimpleButton = ({
  children,
  variant = 'light',
  color = 'violet',
  wide = false,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}: SimpleButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={wide}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
