import axios from "axios";

import { GET_STUDENTS, SEARCH_STUDENT, SORT_STUDENT } from "./types";

// Get Student List
export const getStudents = () => (dispatch, getState) => {
  axios
    .get(`https://api.myjson.com/bins/1dlper/`)
    .then(res => {
      dispatch({
        type: GET_STUDENTS,
        payload: Object.values(res.data)
      });
      //console.log(Object.values(res.data));
    })
    .catch(err =>
      //dispatch(returnErrors(err.response.data, err.response.status))
      console.log(err)
    );
};

//Live search action
export function searchStudent(value) {
  return { type: SEARCH_STUDENT, payload: value };
}

//Sort students by name

//Live search action
export function sortStudents() {
  return { type: SORT_STUDENT };
}
