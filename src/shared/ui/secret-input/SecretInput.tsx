import { useDisclosure } from '@mantine/hooks';
import { PasswordInput } from '@mantine/core';
import React from 'react';

interface SecretInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SecretInput = ({
  placeholder,
  value,
  onChange,
}: SecretInputProps) => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <PasswordInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      visible={visible}
      onVisibilityChange={toggle}
      styles={{
        input: {
          '--input-bd-focus': 'var(--mantine-color-violet-6)',
        },
      }}
    />
  );
};
