import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

export const markAsAread => (index) = store.dispatch({ type: MARK_AS_READ,  index });

export const setNotificationFilter => (filter) = store.dispatch({ type: SET_TYPE_FILTER, filter });
