import { TrackStateType } from '@/entities/User/model/types';
import { SetterOrUpdater } from 'recoil';

export const handleSave = (
  mood: string,
  activities: string[],
  note: string,
  setTracks: SetterOrUpdater<TrackStateType[]>,
  setMood: (mood: string) => void,
  setActivities: (activities: string[]) => void,
  setNote: (note: string) => void,
) => {
  const normalizedMood = mood.toLowerCase();

  const newTrack = {
    mood: normalizedMood,
    activities,
    note,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  setTracks((prev) => [...prev, newTrack]);
  setMood('');
  setActivities([]);
  setNote('');
};
