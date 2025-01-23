import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DotsBackground } from '@/shared/ui';
import { useMantineColorScheme } from '@mantine/core';
import { RecoilRoot } from 'recoil';

export const App = () => {
  const { colorScheme } = useMantineColorScheme();

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
        <div className="content">
          <Outlet />
        </div>
      </RecoilRoot>
    </>
  );
};
