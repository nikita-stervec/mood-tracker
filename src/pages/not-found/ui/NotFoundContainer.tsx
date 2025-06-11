import { SimpleButton } from '@/shared/ui';
import { Container, rem, Stack, Title, Group, Text } from '@mantine/core';
import { IconArrowBack, IconHome } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const NotFoundContainer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Container
      size="md"
      py={rem(80)}
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title
            order={1}
            style={{
              fontSize: rem(120),
              fontWeight: 900,
              lineHeight: 1,
              color: 'var(--mantine-color-gray-2)',
              marginBottom: rem(20),
            }}
          >
            404
          </Title>

          <Title order={2} style={{ marginBottom: rem(10) }}>
            {t('notFound.title')}
          </Title>

          <Text size="lg" color="dimmed" style={{ maxWidth: rem(500) }}>
            {t('notFound.description')}
          </Text>
        </div>

        <Group>
          <SimpleButton
            size="md"
            leftSection={<IconArrowBack size={rem(18)} />}
            variant="default"
            onClick={() => navigate(-1)}
          >
            {t('notFound.actions.back')}
          </SimpleButton>

          <SimpleButton
            size="md"
            leftSection={<IconHome size={rem(18)} />}
            onClick={() => navigate('/')}
          >
            {t('notFound.actions.home')}
          </SimpleButton>
        </Group>
      </Stack>
    </Container>
  );
};
