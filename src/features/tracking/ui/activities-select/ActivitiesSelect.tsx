import { MultiSelect, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useActivitiesData } from '../../model';

interface ActivitiesSelectProps {
  activities: string[];
  setActivities: (activities: string[]) => void;
  error?: boolean;
}

export const ActivitiesSelect = ({
  activities,
  setActivities,
  error,
}: ActivitiesSelectProps) => {
  const { t } = useTranslation();
  const activitiesData = useActivitiesData();

  const handleActivitiesChange = (values: string[]) => {
    const uniqueValues = Array.from(new Set(values));
    setActivities(uniqueValues);
  };

  return (
    <div>
      <MultiSelect
        mt="xs"
        styles={{
          input: {
            borderColor: error ? 'var(--mantine-color-red-6)' : undefined,
            '--input-bd-focus': error
              ? 'var(--mantine-color-red-6)'
              : 'var(--mantine-color-violet-6)',
          },
        }}
        data={activitiesData}
        value={activities}
        onChange={handleActivitiesChange}
        placeholder={t('track.chooseActivities')}
      />
      {error && (
        <Text c="red" size="xs" mt={4}>
          {t('validation.activityRequired')}
        </Text>
      )}
    </div>
  );
};
