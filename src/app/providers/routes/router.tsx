import { RouterProvider } from 'react-router-dom';
import { router } from './routerConfig';

export const Router = () => {
  return <RouterProvider router={router} />;
};
