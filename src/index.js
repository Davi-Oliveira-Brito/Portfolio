import './index.scss';
import './i18n/index.js';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.js';
import About from './pages/About/index.js';
import Projects from './pages/Projects/index.js';
import Header from './components/header/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='/Projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
);