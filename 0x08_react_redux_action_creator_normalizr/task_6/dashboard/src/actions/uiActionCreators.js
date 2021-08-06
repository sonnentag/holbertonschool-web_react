import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export const login = (email, password) => {
  store.dispatch({ type: LOGIN, { user : { email, password } } });
};

export const logout = (email, password) => {
  store.dispatch({ type: LOGOUT, { user : { email, password } } });
};

export const displayNotificationDrawer = (index) => {
  store.dispatch({ type: DISPLAY_NOTIFICATION_DRAWER, index }); 
};

export const hideNotificationDrawer = (index) => {
  store.dispatch({ type: HIDE_NOTIFICATION_DRAWER, index }); 
};
