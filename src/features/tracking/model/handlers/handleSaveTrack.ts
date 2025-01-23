import { TrackStateType } from '@/entities/User/model/types';

export const handleSaveTrack = (
  index: number,
  updatedTrack: {
    mood: string;
    activities: string[];
    note: string;
    updatedAt?: string;
  },
  setTracks: (
    updater: (prevTracks: TrackStateType[]) => TrackStateType[],
  ) => void,
) => {
  setTracks((prevTracks) =>
    prevTracks.map((track, i) =>
      i === index ? { ...track, ...updatedTrack } : track,
    ),
  );
};
