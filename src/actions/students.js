import axios from "axios";
//import { createMessage, returnErrors } from "./messages";

import { GET_STUDENTS } from "./types";

// GET LEADS
export const getStudents = () => (dispatch, getState) => {
  axios
    .get(`https://api.myjson.com/bins/1dlper/`)
    .then(res => {
      dispatch({
        type: GET_STUDENTS,
        payload: Object.values(res.data)
      });
      //console.log(res.data);
    })
    .catch(err =>
      //dispatch(returnErrors(err.response.data, err.response.status))
      console.log(err)
    );
};
