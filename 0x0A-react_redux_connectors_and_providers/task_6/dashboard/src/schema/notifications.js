import * as notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const allNotificationsByUser = [];
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  for (const notif in notifications) {
    if (notifications[notif].author === userId) {
      allNotificationsByUser.push(messages[notifications[notif].context]);
    }
  }
  return allNotificationsByUser; 
};

const user = new schema.Entity('users');

const message = new scema.Entity('messages'. {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

export const normalizedNotifications = normalize(notificationData, notification);
