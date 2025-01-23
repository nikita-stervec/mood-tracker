import { TrackStateType } from './Track';

export type UserRole = 'guest' | 'authenticated';
export type UserLanguage = 'ru' | 'en';

export interface UserStateType {
  id?: string;
  email: string;
  name?: string;
  role: UserRole;
  track?: TrackStateType;
  language?: UserLanguage;
}
