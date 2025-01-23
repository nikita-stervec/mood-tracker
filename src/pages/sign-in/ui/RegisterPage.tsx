import styles from './auth.module.scss';
import { SecretInput, SimpleButton, SimpleInput, TextLogo } from '@/shared/ui';
import React from 'react';
import { useForm, useRegister } from '@/features/auth';
import { useGuestClick } from '@features/auth';
import { useRoute } from '@/features/auth';
import { useTranslation } from 'react-i18next';
import { HeaderComponent } from '@/widgets/header';

export const RegisterPage = () => {
  const { t, i18n } = useTranslation();
  const { goToLogin } = useRoute();
  const handleGuestClick = useGuestClick();
  const { email, password, handleEmailChange, handlePasswordChange } =
    useForm();
  const { handleRegister, error } = useRegister();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['section']}>
        <span className={styles['text']}>{t('goToRegister')}</span>
        <form className={styles['form']} onSubmit={onSubmit}>
          <div className={styles['input']}>
            <SimpleInput
              email={true}
              type="email"
              placeholder={t('email')}
              value={email}
              onChange={handleEmailChange}
            />
            <SecretInput
              placeholder={t('password')}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className={styles['error']}>{error}</p>}
          <div className={styles['button_section']}>
            <SimpleButton type="submit" text={t('register')} wide={true} />
            <SimpleButton
              onClick={handleGuestClick}
              text={t('goToGuest')}
              color="indigo"
              wide={true}
            />
            <SimpleButton
              text={t('haveAccout')}
              onClick={goToLogin}
              color="gray"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
