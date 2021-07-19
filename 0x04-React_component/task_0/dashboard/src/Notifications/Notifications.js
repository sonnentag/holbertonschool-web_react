import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";


const Notifications = ({ displayDrawer, listNotifications }) => {
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
	      { listNotifications
                ? listNotifications.map((item) => {
                  return(
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                    />
                  )
                  })
               : <p>No new notification for now</p>
                }
            </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []  
};

export default Notifications;
