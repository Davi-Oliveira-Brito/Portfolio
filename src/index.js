import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LadingPage/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
    </Routes>
  </BrowserRouter>

);
