import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export interface MoodOption {
  value: string;
  label: string;
  emoji: string;
}

export const useMoodOptions = (): MoodOption[] => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      { value: 'sad', label: t('sad'), emoji: '😢' },
      { value: 'tired', label: t('tired'), emoji: '😴' },
      { value: 'neutral', label: t('neutral'), emoji: '😐' },
      { value: 'inspired', label: t('inspired'), emoji: '✨' },
      { value: 'happy', label: t('happy'), emoji: '😊' },
    ];
  }, [t]);
};
