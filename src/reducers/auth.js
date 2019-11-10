//authentication reducer

import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
