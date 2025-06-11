import styles from './auth.module.scss';
import { SecretInput, SimpleButton, SimpleInput, TextLogo } from '@/shared/ui';
import React from 'react';
import { useForm, useRegister } from '@/features/auth';
import { useGuestClick } from '@features/auth';
import { useRoute } from '@/features/auth';
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
  const { t } = useTranslation();
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
        <span className={styles['text']}>{t('auth.register')}</span>
        <form className={styles['form']} onSubmit={onSubmit}>
          <div className={styles['input']}>
            <SimpleInput
              email={true}
              type="email"
              placeholder={t('auth.email')}
              value={email}
              onChange={handleEmailChange}
            />
            <SecretInput
              placeholder={t('auth.password')}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className={styles['error']}>{error}</p>}
          <div className={styles['button_section']}>
            <SimpleButton type="submit" wide={true}>
              {t('auth.register')}
            </SimpleButton>
            <SimpleButton onClick={handleGuestClick} color="indigo" wide={true}>
              {t('auth.guest')}
            </SimpleButton>
            <SimpleButton onClick={goToLogin} color="gray">
              {t('auth.haveAccout')}
            </SimpleButton>
          </div>
        </form>
      </div>
    </div>
  );
};
