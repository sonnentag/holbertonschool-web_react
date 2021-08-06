import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export const login = (email, password) => {
  return { type: LOGIN, { user : { email, password } } };
};

export const logout = (email, password) => {
  return { type: LOGOUT, { user : { email, password } } };
};

export const displayNotificationDrawer = (index) => {
  return { type: DISPLAY_NOTIFICATION_DRAWER, index }; 
};

export const hideNotificationDrawer = (index) => {
  return { type: HIDE_NOTIFICATION_DRAWER, index }; 
};
