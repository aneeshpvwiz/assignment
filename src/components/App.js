import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "./../static/students.css";
import Header from "./layouts/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
