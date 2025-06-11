import '@shared/styles/global.scss';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@app/providers/routes/router';
import { MantineProvider, createTheme } from '@mantine/core';
import app from '@shared/config/model/firebase';
import '@/app/providers/i18n/i18n';
import { Notifications } from '@mantine/notifications';

if (!app) {
  console.error('Firebase is not initialized.');
}

const originalError = console.error;
console.error = (...args) => {
  if (/Unexpected return value from a callback ref/.test(args[0])) return;
  originalError(...args);
};

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
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="bottom-right" />
      <Router />
    </MantineProvider>
  </React.StrictMode>,
);
