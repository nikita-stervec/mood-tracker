import { useMantineColorScheme, Button, Text } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  color?: string;
}

export const ThemeSwitcher = ({ color }: ThemeSwitcherProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const isDark = colorScheme === 'dark';

  return (
    <Button
      variant="light"
      color={color}
      onClick={() => toggleColorScheme()}
      style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
    >
      <Text className={styles.desktopText}>
        {isDark ? t('lightTheme') : t('darkTheme')}
      </Text>
      <IconSun
        size="1.2rem"
        className={styles.mobileIcon}
        style={{ display: isDark ? 'block' : 'none' }}
      />
      <IconMoonStars
        size="1.2rem"
        className={styles.mobileIcon}
        style={{ display: isDark ? 'none' : 'block' }}
      />
    </Button>
  );
};
