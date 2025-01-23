import '@/shared/styles/global.scss';
import React from 'react';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import { Router } from '@/app/providers/routes/router';
import { MantineProvider, createTheme } from '@mantine/core';
import app from './model/firebase';
import '@/app/providers/i18n/i18n';

if (!app) {
  console.error('Firebase is not initialized.');
}

const theme = createTheme({
  fontFamily: 'Pangolin',
  headings: {
    fontFamily: 'Pangolin',
  },
  colors: {},
  other: {
    background: 'var(--background-color)',
    text: 'var(--text-color)',
    dots: 'var(--dots-color)',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
    </MantineProvider>
  </React.StrictMode>,
);
