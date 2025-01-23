import { TrackStateType } from '@/entities/User/model/types';

export const handleSortTracksByDate = (
  tracks: TrackStateType[],
): TrackStateType[] => {
  return [...tracks].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
