import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
		  {displayDrawer && (
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
            <NotificationItem type='default' value="New course available" />
            <NotificationItem type='urgent' value="New resume available" />
            <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
		    	</ul>
        </div>
	  	)}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
