// This file serves as the entry point for rendering the App component. It uses ReactDOM.render 
// to render the entire React application inside the HTML element with the ID 'root'. 
// The App component, in turn, uses React Router (BrowserRouter, Route, Routes, Outlet) to manage 
// navigation and render different page components based on the specified routes. 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

