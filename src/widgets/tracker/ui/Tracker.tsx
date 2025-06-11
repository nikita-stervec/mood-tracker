import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { TracksState } from '@entities/User/model/Track';
import { Container, Button, Text, Notification } from '@mantine/core';
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
import { SimpleNotification } from '@/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';

const validateTracking = (fields: {
  mood: string;
  activities: string[];
  note: string;
}) => {
  const errors = {
    mood: !fields.mood,
    activities: !fields.activities || fields.activities.length === 0,
    note: !fields.note || fields.note.length === 0,
  };

  return {
    errors,
    isValid: !errors.mood && !errors.activities && !errors.note,
  };
};

export const Tracker: React.FC = () => {
  const { t } = useTranslation();
  const [tracks, setTracks] = useRecoilState(TracksState);
  const moodOptions = useMoodOptions();
  const [showNotification, setShowNotification] = useState(false);
  const [showEditNotification, setShowEditNotification] = useState(false);
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  const defaultMoodValue =
    moodOptions.length > 0
      ? moodOptions[Math.floor(moodOptions.length / 2)].value
      : '';

  const [mood, setMood] = useState<string>(defaultMoodValue);
  const [activities, setActivities] = useState<string[]>([]);
  const [note, setNote] = useState<string>('');
  const [errors, setErrors] = useState({
    mood: false,
    activities: false,
    note: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (moodOptions.length > 0 && mood === '') {
      const newDefault = moodOptions[Math.floor(moodOptions.length / 2)].value;
      setMood(newDefault);
    }
  }, [moodOptions, t]);

  useEffect(() => {
    if (mood && errors.mood) {
      setErrors((prev) => ({ ...prev, mood: false }));
    }
  }, [mood, errors.mood]);

  useEffect(() => {
    if (activities.length > 0 && errors.activities) {
      setErrors((prev) => ({ ...prev, activities: false }));
    }
  }, [activities, errors.activities]);

  useEffect(() => {
    if (note.length > 0 && errors.note) {
      setErrors((prev) => ({ ...prev, note: false }));
    }
  }, [note, errors.note]);

  const getMoodLabel = (moodValue: string) => {
    const moodOption = moodOptions.find((option) => option.value === moodValue);
    return moodOption ? moodOption.label : moodValue;
  };

  const handleDeleteTrack = (createdAt: string) => {
    setTracks((prev) => prev.filter((track) => track.createdAt !== createdAt));
    setShowDeleteNotification(true);
  };

  const handleEditTrack = (index: number, updatedTrack: any) => {
    handleSaveTrack(index, updatedTrack, setTracks);
    setShowEditNotification(true);
  };

  const handleSaveClick = () => {
    const validation = validateTracking({ mood, activities, note });
    setErrors(validation.errors);

    if (validation.isValid) {
      handleSave(
        mood,
        activities,
        note,
        setTracks,
        () => setMood(defaultMoodValue),
        () => setActivities([]),
        () => setNote(''),
      );
      setErrors({ mood: false, activities: false, note: false });
      setShowNotification(true);
    }
  };

  const sortedTracks = handleSortTracksByDate(tracks);

  return (
    <Container
      size="xs"
      mt="md"
      p="xl"
      style={{
        borderRadius: '8px',
        backgroundColor: bgVisible
          ? 'var(--main-secton-bg-color)'
          : 'transparent',
        transition: 'background-color 0.2s ease-in-out',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div>
          <span className={styles['tracker-span']}>
            {t('track.chooseMood')}: {getMoodLabel(mood)}
            {errors.mood && (
              <Text c="red" size="xs" mt={4}>
                {t('validation.moodRequired')}
              </Text>
            )}
          </span>
          <MoodSlider mood={mood} setMood={setMood} error={errors.mood} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className={styles['blocks']}>
          <span className={styles['tracker-span']}>
            {t('track.chooseActivities')}
          </span>
          <ActivitiesSelect
            activities={activities}
            setActivities={setActivities}
            error={errors.activities}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className={styles['blocks']}>
          <span className={styles['tracker-span']}>{t('track.writeNote')}</span>
          <NoteArea note={note} setNote={setNote} error={errors.note} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={styles['blocks']}>
          <Button mt="md" color="violet" fullWidth onClick={handleSaveClick}>
            {t('track.save')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className={styles['blocks']}>
          <Text size="lg" mt="md" mb="sm">
            {t('track.yourTracks')}
          </Text>
          <AnimatePresence>
            {sortedTracks.length > 0 ? (
              sortedTracks.map((track) => (
                <motion.div
                  key={track.createdAt}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ReadyTrack
                    key={track.createdAt}
                    updatedAt={track.updatedAt}
                    onDelete={() => handleDeleteTrack(track.createdAt)}
                    mood={track.mood}
                    activities={track.activities}
                    note={track.note}
                    createdAt={track.createdAt}
                    onSave={(updatedTrack) =>
                      handleEditTrack(
                        tracks.findIndex(
                          (t) => t.createdAt === track.createdAt,
                        ),
                        updatedTrack,
                      )
                    }
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {t('track.noTracks')}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <SimpleNotification
            title={t('notification.successTitle')}
            message={t('notification.savedMessage')}
            color="green"
            autoClose={5000}
            onClose={() => setShowNotification(false)}
          />
        </motion.div>
      )}

      {showEditNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <SimpleNotification
            title={t('notification.successTitle')}
            message={t('notification.updatedMessage')}
            color="blue"
            autoClose={5000}
            onClose={() => setShowEditNotification(false)}
          />
        </motion.div>
      )}

      {showDeleteNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <SimpleNotification
            title={t('notification.successTitle')}
            message={t('notification.deletedMessage')}
            color="red"
            autoClose={5000}
            onClose={() => setShowDeleteNotification(false)}
          />
        </motion.div>
      )}
    </Container>
  );
};
