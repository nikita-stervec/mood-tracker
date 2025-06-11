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
      { value: 'angry', label: t('moodList.angry'), emoji: '😠' },
      { value: 'sad', label: t('moodList.sad'), emoji: '😢' },
      { value: 'tired', label: t('moodList.tired'), emoji: '😴' },
      { value: 'calm', label: t('moodList.calm'), emoji: '😌' },
      { value: 'happy', label: t('moodList.happy'), emoji: '😊' },
      { value: 'inspired', label: t('moodList.inspired'), emoji: '✨' },
      { value: 'excited', label: t('moodList.excited'), emoji: '😄' },
    ];
  }, [t]);
};
