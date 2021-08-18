import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  store.dispatch({ type: SELECT_COURSE, index });
};

export const unSelectCourse = (index) => {
  store.dispatch({ type: UNSELECT_COURSE, index });
};
