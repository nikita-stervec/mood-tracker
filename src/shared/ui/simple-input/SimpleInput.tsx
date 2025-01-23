import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

type OmitSizeFromHTMLAttributes<T> = Omit<T, 'size'>;

interface SimpleInputProps
  extends OmitSizeFromHTMLAttributes<
    React.InputHTMLAttributes<HTMLInputElement>
  > {
  email?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

export const SimpleInput = ({
  email = false,
  size = undefined,
  ...props
}: SimpleInputProps) => {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder={email ? 'Your email' : 'Enter text'}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      leftSection={email ? <IconAt size={16} /> : null}
      rightSectionPointerEvents="all"
      rightSection={
        value && (
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        )
      }
      size={size}
      styles={{
        input: {
          '--input-bd-focus': 'var(--mantine-color-violet-6)',
        },
      }}
      {...props}
    />
  );
};
