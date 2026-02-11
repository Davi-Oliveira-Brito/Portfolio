import './index.scss';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
  </BrowserRouter>

);
