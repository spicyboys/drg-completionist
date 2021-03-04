import { notification } from 'antd';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DBContextProvider from 'db/DBContext';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

render(
  <React.StrictMode>
    <DBContextProvider>
      <Router>
        <App />
      </Router>
    </DBContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

notification.config({
  placement: 'bottomRight',
});

serviceWorkerRegistration.register();
