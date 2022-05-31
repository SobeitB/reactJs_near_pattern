import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initContract } from './store/storeNear';
import {BrowserRouter} from "react-router-dom";

window.nearInitPromise = initContract()
.then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
})
.catch(console.error)

reportWebVitals();