import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <>
    <div id='root-notifications'>
      <Notifications />
    </div>
    <App />
  </>,
  document.getElementById('root')
);
