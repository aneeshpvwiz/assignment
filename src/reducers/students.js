import { GET_STUDENTS, SEARCH_STUDENT } from "../actions/types.js";

const initialState = {
  students: [],
  value: "",
  result: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case SEARCH_STUDENT:
      const result = state.students.filter(val =>
        val.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        value: action.payload,
        result: result
      };
    default:
      return state;
  }
}
