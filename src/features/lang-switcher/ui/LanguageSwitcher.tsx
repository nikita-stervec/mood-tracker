import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { Button, Group } from '@mantine/core';
import { UserState } from '@/entities/User/model/User';
import { UserLanguage } from '@/entities/User/model/types/User';

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
    i18n.changeLanguage(language).then(() => {
      setUser((prevUser) => ({
        ...prevUser,
        language: language as UserLanguage,
      }));
    });
  };

  return (
    <Group gap="xs" flex="flex" justify="center">
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
