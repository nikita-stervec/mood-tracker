import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserStateType } from './types';

const { persistAtom } = recoilPersist({
  key: 'UserState',
  storage: localStorage,
});

export const UserState = atom<UserStateType>({
  key: 'UserState',
  default: {
    id: '',
    email: '',
    name: '',
    role: 'guest',
    language: 'en',
    track: {
      createdAt: '',
      updatedAt: '',
      mood: '',
      activities: [''],
      note: '',
    },
  },
  effects_UNSTABLE: [persistAtom],
});
