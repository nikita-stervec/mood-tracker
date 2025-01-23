import { nameCutter } from '../model/nameCutter';
import { Avatar, Box } from '@mantine/core';
import { InputUsernameSection } from './input-username-section/InputUsernameSection';
import styles from './UserCard.module.scss';
import { useTranslation } from 'react-i18next';
import { UserState } from '@/entities/User/model/User';
import { useRecoilValue } from 'recoil';

export const UserCard = () => {
  const { t } = useTranslation();
  const user = useRecoilValue(UserState);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar color="initials" size={64}>
        {nameCutter(user.name ? user.name : user.email)}
      </Avatar>
      <Box>
        <span className={styles['welcome']}>{t('welcomeBlock')}</span>
        <div className={styles['name']}>
          {user.name ? user.name : user.email}
        </div>
      </Box>
      {user.name ? null : <InputUsernameSection />}
    </div>
  );
};
