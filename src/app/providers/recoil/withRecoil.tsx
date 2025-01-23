import React from 'react';
import { RecoilRoot } from 'recoil';

export const withRecoil = (component: () => React.ReactNode) => () => {
  return <RecoilRoot>{component()}</RecoilRoot>;
};
