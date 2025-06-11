import React, { useEffect } from 'react';
import { DotsBackground } from '@/shared/ui';
import { useMantineColorScheme } from '@mantine/core';
import { RecoilRoot } from 'recoil';
import { HeaderComponent } from '@/widgets/header/ui/Header';
import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export const App = () => {
  const { colorScheme } = useMantineColorScheme();
  const location = useLocation();

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
      <RecoilRoot>
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
      </RecoilRoot>
    </>
  );
};
