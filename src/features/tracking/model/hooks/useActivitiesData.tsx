import { useTranslation } from 'react-i18next';

export const useActivitiesData = () => {
  const { t } = useTranslation();

  const activitiesData = [
    { value: 'reading', label: t('reading') },
    { value: 'sport', label: t('sport') },
    { value: 'music', label: t('music') },
    { value: 'work', label: t('work') },
    { value: 'relax', label: t('relax') },
    { value: 'walking', label: t('walking') },
    { value: 'cooking', label: t('cooking') },
    { value: 'watching_movies', label: t('watching_movies') },
    { value: 'gaming', label: t('gaming') },
    { value: 'meditation', label: t('meditation') },
    { value: 'drawing', label: t('drawing') },
    { value: 'writing', label: t('writing') },
    { value: 'shopping', label: t('shopping') },
    { value: 'traveling', label: t('traveling') },
    { value: 'photography', label: t('photography') },
    { value: 'dancing', label: t('dancing') },
    { value: 'gardening', label: t('gardening') },
    { value: 'studying', label: t('studying') },
    { value: 'socializing', label: t('socializing') },
    { value: 'yoga', label: t('yoga') },
  ];

  return activitiesData;
};
