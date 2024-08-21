import React from 'react';
import Root from './pages/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import PersonelInfo from './pages/PersonelInfo.jsx'
import Desipline from './pages/Desipline.jsx';
import Inventory from './pages/Inventory.jsx';
import Inventoryconsumption from './pages/Inventoryconsumption.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
       
       <Dashboard/>
      </div>
    ),
  },
  {
    path: "/PersonelInfo",
    element: <div>
      <PersonelInfo/>
    </div>,
  },
  {
    path: "/desipline",
    element: <div>
      <Desipline/>
    </div>,
  },
  {
    path: "/inventory",
    element: <div>
      <Inventory/>
    </div>,
  },
  {
    path: "/consumption",
    element: <div>
      <Inventoryconsumption/>
    </div>,
  },
]);

const App = () => {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
};

export default App;