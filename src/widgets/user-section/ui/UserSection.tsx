import { UserCard } from '@/features/user-card';
import { Quote } from '@/shared/ui';
import { Container, useMantineColorScheme } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const UserSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      mt="md"
      p="xl"
      size="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: bgVisible
          ? 'var(--main-secton-bg-color)'
          : 'transparent',
        transition: 'background-color 0.2s ease-in-out',
      }}
    >
      <UserCard />
      <Quote
        author={t('demoQuote.quote1author')}
        quote={t('demoQuote.quote1quote')}
      />
    </Container>
  );
};
