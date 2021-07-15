import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
		<>
      <div className="menuItem">Your notifications</div>
		  {displayDrawer && (
        <div className='Notifications'>
          if (listNotifications > 0) {
            <>
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
						    {listNotifications.map((item) => {
                  return(
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                    />
                  )
                })
		  					}
		      	  </ul>
			  		</>
          } else {
			      <p>No new notification for now</p>
			    }
        </div>
		)}
  </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
	listNotifications: [],
};

export default Notifications;
