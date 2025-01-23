import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TrackStateType } from './types';

const { persistAtom } = recoilPersist({
  key: 'TracksState',
  storage: localStorage,
});

export const TracksState = atom<TrackStateType[]>({
  key: 'TracksState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
