import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "./../static/students.css";
import StudentContainer from "../containers/StudentContainer";
import Dashboard from "./Dashboard";
import Header from "../components/layouts/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../components/accounts/Login";
import PrivateRoute from "../components/common/PrivateRouter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
