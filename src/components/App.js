import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import StudentsList from "./students/StudentsList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <StudentsList />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
