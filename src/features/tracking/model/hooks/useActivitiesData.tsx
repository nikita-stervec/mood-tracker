import { useTranslation } from 'react-i18next';

export const useActivitiesData = () => {
  const { t } = useTranslation();

  const activitiesData = [
    { value: 'reading', label: t('activitiesList.reading') },
    { value: 'sport', label: t('activitiesList.sport') },
    { value: 'music', label: t('activitiesList.music') },
    { value: 'work', label: t('activitiesList.work') },
    { value: 'relax', label: t('activitiesList.relax') },
    { value: 'walking', label: t('activitiesList.walking') },
    { value: 'cooking', label: t('activitiesList.cooking') },
    { value: 'watching_movies', label: t('activitiesList.watching_movies') },
    { value: 'gaming', label: t('activitiesList.gaming') },
    { value: 'meditation', label: t('activitiesList.meditation') },
    { value: 'drawing', label: t('activitiesList.drawing') },
    { value: 'writing', label: t('activitiesList.writing') },
    { value: 'shopping', label: t('activitiesList.shopping') },
    { value: 'traveling', label: t('activitiesList.traveling') },
    { value: 'photography', label: t('activitiesList.photography') },
    { value: 'dancing', label: t('activitiesList.dancing') },
    { value: 'gardening', label: t('activitiesList.gardening') },
    { value: 'studying', label: t('activitiesList.studying') },
    { value: 'socializing', label: t('activitiesList.socializing') },
    { value: 'yoga', label: t('activitiesList.yoga') },
  ];

  return activitiesData;
};
