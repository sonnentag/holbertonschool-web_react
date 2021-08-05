import * as notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  return notificationData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
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
