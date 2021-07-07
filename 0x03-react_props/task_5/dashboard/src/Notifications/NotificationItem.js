import React from 'react'

function NotificationItem({type, html, value}) {
  return <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
};

NotificationItem.prototype = {
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
