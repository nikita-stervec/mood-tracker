import { useState, useEffect } from 'react';
import {
  IconX,
  IconPencil,
  IconCheck,
  IconArrowBackUp,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useActivitiesData, useMoodOptions } from '@/features/tracking/model';
import { Box, Button, Text, useMantineColorScheme } from '@mantine/core';
import { MoodSlider, NoteArea, ActivitiesSelect } from '@features/tracking/ui/';

interface ReadyTrackProps {
  mood: string; // Это значение (value), например, "happy"
  activities: string[];
  note: string;
  createdAt: string;
  updatedAt?: string;
  onDelete: () => void;
  onSave: (updatedTrack: {
    mood: string;
    activities: string[];
    note: string;
    updatedAt?: string;
  }) => void;
}

export const ReadyTrack = ({
  mood,
  activities,
  note,
  createdAt,
  updatedAt,
  onDelete,
  onSave,
}: ReadyTrackProps) => {
  const { t, i18n } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [editedMood, setEditedMood] = useState(mood);
  const [editedActivities, setEditedActivities] = useState(activities);
  const [editedNote, setEditedNote] = useState(note);
  const activitiesData = useActivitiesData();
  const moodOptions = useMoodOptions();
  const theme = useMantineColorScheme();

  const getMoodLabel = (moodValue: string) => {
    const moodOption = moodOptions.find((option) => option.value === moodValue);
    return moodOption ? moodOption.label : moodValue; // value как fallback
  };

  useEffect(() => {
    setEditedMood(mood);
  }, [i18n.language, mood]);

  const getActivityLabels = (activityValues: string[]) => {
    const uniqueValues = Array.from(new Set(activityValues));
    return uniqueValues.map((value) => {
      const activity = activitiesData.find((item) => item.value === value);
      return activity ? activity.label : value; // value как fallback
    });
  };

  const hasChanges =
    editedMood !== mood ||
    editedActivities.join(',') !== activities.join(',') ||
    editedNote !== note;

  const onClose = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    if (hasChanges) {
      onSave({
        mood: editedMood,
        activities: editedActivities,
        note: editedNote,
        updatedAt: new Date().toISOString(),
      });
    } else {
      onSave({
        mood: editedMood,
        activities: editedActivities,
        note: editedNote,
      });
    }
    setIsEditing(false);
  };

  return (
    <div
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? '#2C2E33' : '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '12px',
        color: theme.colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        position: 'relative',
      }}
    >
      {isEditing ? (
        <>
          <div style={{ marginBottom: '16px' }}>
            <Button
              onClick={onClose}
              variant="subtle"
              color="indigo"
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                padding: '4px',
                width: '32px',
                height: '32px',
              }}
            >
              <IconArrowBackUp size={18} />
            </Button>
            <Box mb="xl">
              <Text size="sm" mb="xs">
                {t('mood')}: {getMoodLabel(editedMood)}
              </Text>
              <MoodSlider mood={editedMood} setMood={setEditedMood} />
            </Box>
          </div>

          <Box mb="xl">
            <ActivitiesSelect
              activities={editedActivities}
              setActivities={setEditedActivities}
            />
          </Box>

          <Box mb="xl">
            <NoteArea note={editedNote} setNote={setEditedNote} />
          </Box>

          <Button
            onClick={handleSave}
            variant="light"
            color="green"
            leftSection={<IconCheck size={16} />}
            style={{ marginTop: '12px', width: '100%' }}
          >
            {t('save')}
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={onDelete}
            variant="subtle"
            color="red"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              padding: '4px',
              width: '32px',
              height: '32px',
            }}
          >
            <IconX size={18} />
          </Button>
          <Button
            onClick={() => setIsEditing(true)}
            variant="subtle"
            color="blue"
            style={{
              position: 'absolute',
              top: '42px',
              right: '8px',
              padding: '4px',
              width: '32px',
              height: '32px',
            }}
          >
            <IconPencil size={16} />
          </Button>
          <Text>
            {t('mood')}: {getMoodLabel(mood)}
          </Text>
          <Text>
            {t('activities')}: {getActivityLabels(activities).join(', ')}
          </Text>
          <Text>
            {t('note')}: {note}
          </Text>
          <Text size="sm" c="dimmed">
            {t('createdAt')}: {new Date(createdAt).toLocaleString()}
          </Text>
          {updatedAt && updatedAt !== createdAt ? (
            <Text size="sm" c="dimmed">
              {t('updatedAt')}: {new Date(updatedAt).toLocaleString()}
            </Text>
          ) : null}
        </>
      )}
    </div>
  );
};
