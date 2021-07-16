import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({type, html, value}) {
  const listitem = { 
  return {
	  <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value} classname={css(type === "urgent" ? styles.urgent : styles.default);}</li>
  }
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

const styles = StyleSheet.create({
    default: {
        color: "blue",
    },
    urgent: {
        color: "red",
    }
});

export default NotificationItem;
