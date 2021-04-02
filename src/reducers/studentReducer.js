import { ACTION_TYPES } from "../actions/StudentActions";

const initialState = {
  studentList: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        studentList: [...action.payload],
      };
    default:
      return state;
  }
};
