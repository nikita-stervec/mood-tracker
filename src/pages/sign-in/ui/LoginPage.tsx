import styles from './auth.module.scss';
import { SecretInput, SimpleButton, SimpleInput, TextLogo } from '@/shared/ui';
import React from 'react';
import { useLogin, useRoute } from '@/features/auth';
import { useGuestClick } from '@features/auth';
import { useForm } from '@/features/auth';
import { useTranslation } from 'react-i18next';
import { HeaderComponent } from '@/widgets/header';

export const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const { goToRegister } = useRoute();
  const { email, password, handleEmailChange, handlePasswordChange } =
    useForm();
  const handleGuestClick = useGuestClick();
  const { handleLogin, error } = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['section']}>
        <span className={styles['text']}>{t('auth.login')}</span>
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
              {t('auth.enter')}
            </SimpleButton>
            <SimpleButton onClick={handleGuestClick} color="indigo" wide={true}>
              {t('auth.guest')}
            </SimpleButton>
            <SimpleButton onClick={goToRegister} color="gray">
              {t('auth.noAccout')}
            </SimpleButton>
          </div>
        </form>
      </div>
    </div>
  );
};
