import { t } from 'i18next';

export interface MoodOption {
  value: string;
  label: string;
  emoji: string;
}

export const moodOptions: MoodOption[] = [
  { value: 'sad', label: t('sad'), emoji: '😢' },
  { value: 'anxious', label: t('anxious'), emoji: '😟' },
  { value: 'tired', label: t('tired'), emoji: '😴' },
  { value: 'irritated', label: t('irritated'), emoji: '😠' },
  { value: 'neutral', label: t('neutral'), emoji: '😐' },
  { value: 'calm', label: t('calm'), emoji: '🧘' },
  { value: 'energetic', label: t('energetic'), emoji: '💪' },
  { value: 'inspired', label: t('inspired'), emoji: '✨' },
  { value: 'loving', label: t('loving'), emoji: '😍' },
  { value: 'happy', label: t('happy'), emoji: '😊' },
];

export interface TrackStateType {
  mood: string;
  updatedAt?: string;
  activities: string[];
  note: string;
  createdAt: string;
}
