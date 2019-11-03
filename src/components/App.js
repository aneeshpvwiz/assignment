import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import "./../static/students.css";

import Search from "./layouts/Search";
import Sort from "./layouts/Sort";
import StudentsList from "./students/StudentsList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Search />
          <StudentsList />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
