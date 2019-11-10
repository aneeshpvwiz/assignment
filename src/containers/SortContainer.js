import React, { Component } from "react";
import { sortStudents } from "../actions/students";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Sort from "../components/layouts/Sort";

class SortContainer extends Component {
  constructor(props) {
    super(props);
    this.OnClick = this.OnClick.bind(this);
  }

  OnClick() {
    this.props.sortStudents();
  }
  render() {
    console.log(this.props.studentsList);
    return <Sort onClick={this.OnClick} />;
  }
}

const mapStateToProps = state => ({
  studentsList: state.students.studentsList
});

const mapDispatchToProps = dispatch => ({
  sortStudents: value => dispatch(sortStudents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortContainer);
