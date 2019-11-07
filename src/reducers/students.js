import { GET_STUDENTS, SEARCH_STUDENT } from "../actions/types.js";

const initialState = {
  students: [],
  result: [],
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        result: action.payload
      };
    case SEARCH_STUDENT:
      return {
        ...state,
        value: action.payload,
        result: state.students.filter(val =>
          val.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
}
