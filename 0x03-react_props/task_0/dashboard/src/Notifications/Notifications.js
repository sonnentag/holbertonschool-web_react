import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
			<button
        type='button'
        style={{ display: 'inline', position: 'absolute', right: '0.1rem', top: '0.1rem', margin: '0 0' }}
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
			  <img src={icon} alt="" style={{ width: '4px' }} />
			</button>
		  <ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
			</ul>
    </div>
  );
};

export default Notifications;
