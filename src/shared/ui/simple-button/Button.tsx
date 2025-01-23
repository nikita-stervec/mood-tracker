import { Button } from '@mantine/core';
import React from 'react';

interface ButtonProps {
  text: string;
  variant?: string;
  color?: 'violet' | string | undefined;
  wide?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SimpleButton = ({
  text,
  variant = 'light',
  color = 'violet',
  wide = false,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color || undefined}
      onClick={onClick}
      fullWidth={wide}
      type={type}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
