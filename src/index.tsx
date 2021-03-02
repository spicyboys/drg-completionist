import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from 'store/Store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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

serviceWorkerRegistration.register();
