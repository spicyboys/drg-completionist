import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from 'data/Store';
import './index.css';
import App from './App';

render(
  <React.StrictMode>
    <Store>
      <Router>
        <App />
      </Router>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
