import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import MealDescription from './pages/MealDescription';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/meal/:id',
    element: <MealDescription />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
