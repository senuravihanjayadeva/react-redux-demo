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
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        studentList: [...state.studentList, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        studentList: state.studentList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        studentList: state.studentList.filter((x) => x.id != action.payload),
      };
    default:
      return state;
  }
};
