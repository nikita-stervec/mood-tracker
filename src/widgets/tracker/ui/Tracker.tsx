import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TracksState } from '@entities/User/model/Track';
import { Container, Button, Text } from '@mantine/core';
import styles from './Tracker.module.scss';
import { ReadyTrack } from '@features/tracking/ui';
import { MoodSlider, ActivitiesSelect, NoteArea } from '@features/tracking/ui';
import {
  handleSave,
  handleSaveTrack,
  handleSortTracksByDate,
} from '@features/tracking/model';
import { useTranslation } from 'react-i18next';
import { useMoodOptions } from '@features/tracking/model';

export const Tracker: React.FC = () => {
  const { t } = useTranslation();
  const [tracks, setTracks] = useRecoilState(TracksState);
  const [mood, setMood] = useState<string>('');
  const [activities, setActivities] = useState<string[]>([]);
  const [note, setNote] = useState<string>('');
  const moodOptions = useMoodOptions();

  const getMoodLabel = (moodValue: string) => {
    const moodOption = moodOptions.find((option) => option.value === moodValue);
    return moodOption ? moodOption.label : moodValue; // value как fallback
  };

  const handleDeleteTrack = (index: number) => {
    const newTracks = tracks.filter((_, i) => i !== index);
    setTracks(newTracks);
  };

  const sortedTracks = handleSortTracksByDate(tracks);

  return (
    <Container
      size="xs"
      mt="md"
      p="xl"
      bg="var(--main-secton-bg-color)"
      style={{ borderRadius: '8px' }}
    >
      <div>
        <span className={styles['tracker-span']}>
          {t('chooseMood')}: {getMoodLabel(mood)}
        </span>
        <MoodSlider mood={mood} setMood={setMood} />
      </div>

      <div className={styles['blocks']}>
        <span className={styles['tracker-span']}>{t('chooseActivities')}</span>
        <ActivitiesSelect
          activities={activities}
          setActivities={setActivities}
        />
      </div>

      <div className={styles['blocks']}>
        <span className={styles['tracker-span']}>{t('writeNote')}</span>
        <NoteArea note={note} setNote={setNote} />
      </div>

      <div className={styles['blocks']}>
        <Button
          mt="md"
          color="violet"
          fullWidth
          onClick={() =>
            handleSave(
              mood,
              activities,
              note,
              setTracks,
              setMood,
              setActivities,
              setNote,
            )
          }
        >
          {t('save')}
        </Button>
      </div>

      <div className={styles['blocks']}>
        <Text size="lg" mt="md" mb="sm">
          {t('yourTracks')}
        </Text>
        {sortedTracks.length > 0
          ? sortedTracks.map((track, index) => (
              <ReadyTrack
                key={track.createdAt}
                updatedAt={track.updatedAt}
                onDelete={() => handleDeleteTrack(index)}
                mood={track.mood}
                activities={track.activities}
                note={track.note}
                createdAt={track.createdAt}
                onSave={(updatedTrack) =>
                  handleSaveTrack(index, updatedTrack, setTracks)
                }
              />
            ))
          : `${t('noTracks')}`}
      </div>
    </Container>
  );
};
