import {
  Box,
  Title,
  useMantineTheme,
  useMantineColorScheme,
  Menu,
  Button,
  Group,
} from '@mantine/core';
import { IconCalendar, IconLogout, IconSettings } from '@tabler/icons-react';
import { LanguageSwitcher } from '@/features/lang-switcher';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { TextLogo } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/entities/User/model/User';
import { logout } from '@/features/auth';

interface HeaderProps {
  isAuthPage?: boolean;
}

export const HeaderComponent = ({ isAuthPage }: HeaderProps) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const navigate = useNavigate();
  const user = useRecoilValue(UserState);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box
      component="header"
      style={{
        height: 60,
        padding: theme.spacing.xs,
        backgroundColor: isDark
          ? 'rgba(34, 34, 34, 0.1)'
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: theme.shadows.sm,
      }}
    >
      <Title
        style={{
          color: isDark ? theme.white : theme.colors.dark[7],
          padding: '12px 0 0',
        }}
      >
        <TextLogo />
      </Title>

      <Group gap="sm">
        <Button
          variant="light"
          leftSection={<IconCalendar size="1.2rem" />}
          onClick={() => navigate('/track')}
          style={{
            backgroundColor: isDark
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
            color: isDark ? theme.white : theme.colors.dark[7],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {t('track')}
        </Button>

        {user.role === 'guest' ? (
          <>
            <Button
              variant="light"
              onClick={() => navigate('/login')}
              style={{
                backgroundColor: isDark
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
                color: isDark ? theme.white : theme.colors.dark[7],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {t('login')}
            </Button>
            <Button
              variant="light"
              onClick={() => navigate('/register')}
              style={{
                backgroundColor: isDark
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
                color: isDark ? theme.white : theme.colors.dark[7],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {t('register')}
            </Button>
          </>
        ) : (
          <Button
            variant="light"
            onClick={() => navigate('/profile')}
            style={{
              backgroundColor: isDark
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
              color: isDark ? theme.white : theme.colors.dark[7],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {user.name ? user.name : user.email}
          </Button>
        )}

        <Menu shadow="md" width={185} position="bottom-end">
          <Menu.Target>
            <Button
              variant="light"
              rightSection={<IconSettings size="1.2rem" />}
              style={{
                backgroundColor: isDark
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
                color: isDark ? theme.white : theme.colors.dark[7],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {t('settings')}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>{t('language')}</Menu.Label>
            <Menu.Item
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
              }}
            >
              <LanguageSwitcher
                color={isDark ? theme.colors.violet[3] : theme.colors.dark[7]}
              />
            </Menu.Item>

            <Menu.Label>{t('theme')}</Menu.Label>
            <Menu.Item>
              <ThemeSwitcher
                color={isDark ? theme.colors.violet[3] : theme.colors.dark[7]}
              />
            </Menu.Item>

            <Menu.Label>{t('logout')}</Menu.Label>
            <Menu.Item>
              <Button
                fullWidth
                onClick={handleLogout}
                color={isDark ? theme.colors.violet[3] : theme.colors.dark[7]}
              >
                <IconLogout stroke={2} />
              </Button>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Box>
  );
};
