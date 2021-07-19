import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button
        type='button'
        style={{ display: 'inline', position: 'absolute', right: '0.1rem', top: '0.1rem', margin: '1 1' }}
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={icon} alt="" style={{ width: '4px' }} />
      </button>
      <ul>
        <NotificationItem type='default' value="New course available" />
        <NotificationItem type='urgent' value="New resume available" />
        <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
      </ul>
    </div>
  );
};

export default Notifications;
