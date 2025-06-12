import React, { useEffect } from 'react';
import { DotsBackground } from '@/shared/ui';
import { useMantineColorScheme } from '@mantine/core';
import { RecoilRoot, useRecoilState } from 'recoil';
import { HeaderComponent } from '@/widgets/header/ui/Header';
import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { UserState } from '@/entities/User/model/User';
import { useTranslation } from 'react-i18next';

const AppContent = () => {
  const { i18n } = useTranslation();
  const [user] = useRecoilState(UserState);
  const { colorScheme } = useMantineColorScheme();
  const location = useLocation();

  useEffect(() => {
    if (i18n.language !== user.language) {
      i18n.changeLanguage(user.language);
    }
  }, [user.language]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (colorScheme === 'light') {
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.removeAttribute('data-theme');
    }
  }, [colorScheme]);

  return (
    <>
      <div className="dots-background">
        <DotsBackground />
      </div>
      <HeaderComponent />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.16, 0.77, 0.47, 0.97],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            transition: {
              duration: 0.1,
              ease: 'easeIn',
            },
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            paddingBottom: '75px',
            overflowX: 'hidden',
          }}
        >
          <div className="content">
            <Outlet />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const App = () => {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
};
