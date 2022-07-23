import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import SeleucusApp from './projects/seleucus/index';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/seleucus" element={<SeleucusApp />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
