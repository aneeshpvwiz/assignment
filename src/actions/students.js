import axios from "axios";

import { GET_STUDENTS, SEARCH_STUDENT } from "./types";

// GET STUDENTS
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

//SEARCH STUDENTS
export function searchStudent(value) {
  return { type: SEARCH_STUDENT, payload: value };
}
