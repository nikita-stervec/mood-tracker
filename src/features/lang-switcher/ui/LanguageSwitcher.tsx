import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { Button, Group } from '@mantine/core';
import { UserState } from '@/entities/User/model/User';

interface LanguageSwitcherProps {
  color?: string;
}

export const LanguageSwitcher = ({ color }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [user, setUser] = useRecoilState(UserState);

  const languages = [
    { code: 'en', label: '🇺🇸' },
    { code: 'ru', label: '🇷🇺' },
  ];

  const changeLanguage = (language: string) => {
    setUser((prev) => ({
      ...prev,
      language: language as typeof user.language,
    }));
  };

  return (
    <Group gap="xs" justify="center">
      {languages.map((lang) => (
        <Button
          color={color}
          key={lang.code}
          variant="light"
          onClick={(e) => {
            e.stopPropagation();
            changeLanguage(lang.code);
          }}
          disabled={i18n.language === lang.code}
        >
          {lang.label}
        </Button>
      ))}
    </Group>
  );
};
