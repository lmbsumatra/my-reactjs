import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Discover from './components/discover/Discover';
import AboutUs from './components/about-us/AboutUs';
import JoinUs from './components/join-us/Join-us';
import LogIn from './Log-in';
import SignUp from './Sign-up';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"discover",
    element: <Discover />
  },
  {
    path:"about",
    element: <AboutUs />
  },
  {
    path:"join",
    element: <JoinUs />
  },
  {
    path:"log-in",
    element: <LogIn />
  },
  {
    path:"sign-up",
    element: <SignUp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
