import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

//Authenticting the login request with predefined values
export const login = (username, password, dispatch) => {
  if (username === "admin" && password === "admin") {
    return {
      type: LOGIN_SUCCESS
    };
  } else {
    return {
      type: LOGIN_FAIL
    };
  }
};
