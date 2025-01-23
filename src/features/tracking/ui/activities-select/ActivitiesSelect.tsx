import { MultiSelect } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useActivitiesData } from '../../model';

interface ActivitiesSelectProps {
  activities: string[]; // Массив значений (values)
  setActivities: (activities: string[]) => void;
}

export const ActivitiesSelect = ({
  activities,
  setActivities,
}: ActivitiesSelectProps) => {
  const { t } = useTranslation();
  const activitiesData = useActivitiesData();

  const handleActivitiesChange = (values: string[]) => {
    const uniqueValues = Array.from(new Set(values));
    setActivities(uniqueValues);
  };

  return (
    <MultiSelect
      mt="xs"
      styles={{
        input: {
          '--input-bd-focus': 'var(--mantine-color-violet-6)',
        },
      }}
      data={activitiesData}
      value={activities} // Передаем значения (values)
      onChange={handleActivitiesChange}
      placeholder={t('chooseActivities')}
    />
  );
};
