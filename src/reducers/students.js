import {
  GET_STUDENTS,
  SEARCH_STUDENT,
  SORT_STUDENT
} from "../actions/types.js";

const initialState = {
  students: [], //temporary state
  studentsList: [], //list to be displayed on the components
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        studentsList: action.payload
      };
    case SEARCH_STUDENT:
      return {
        ...state,
        value: action.payload,
        studentsList: state.students.filter(val =>
          val.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case SORT_STUDENT:
      return {
        ...state,
        studentsList: state.studentsList.sort(function(a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        })
      };

    default:
      return state;
  }
}
