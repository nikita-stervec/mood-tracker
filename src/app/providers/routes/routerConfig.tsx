import { createBrowserRouter } from 'react-router-dom';
import { App } from '@app/App';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/not-found';
import { RegisterPage } from '@/pages/sign-in';
import { LoginPage } from '@/pages/sign-in';
import { TrackPage } from '@/pages/track';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'track',
        element: <TrackPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
