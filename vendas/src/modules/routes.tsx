import { RouteObject } from 'react-router-dom';

import LoginScreen from '../modules/login/';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];