import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case SELECT_COURSE:
      return {
      };

    case UNSELECT_COURSE:
      return {
      };

    case FETCH_COURSE_SUCCESS:
      return {
      };

    default:
      return state;
  };
};
