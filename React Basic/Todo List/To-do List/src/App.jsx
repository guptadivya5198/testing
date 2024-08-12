import './App.css';
import React from 'react';
import Register from './Component/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/About',
    element: <div>About Us!</div>,
  },
  {
    path: '/Register',
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* <Register /> */}
    </>
  );
}

export default App;
