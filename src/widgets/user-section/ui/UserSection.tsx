import { UserCard } from '@/features/user-card';
import { Quote } from '@/shared/ui';
import { Container, useMantineColorScheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const UserSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  return (
    <Container
      bg="var(--main-secton-bg-color)"
      mt="md"
      p="xl"
      size="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
      }}
    >
      <UserCard />
      <Quote author={t('quote1author')} quote={t('quote1quote')} />
    </Container>
  );
};
