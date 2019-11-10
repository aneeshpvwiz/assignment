import React, { Component } from "react";
import { searchStudent } from "../actions/students";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Search from "../components/layouts/Search";

class searchContainer extends Component {
  constructor(props) {
    super(props);
    this.OnChange = this.OnChange.bind(this);
  }
  static propTypes = {
    value: PropTypes.string.isRequired
  };
  OnChange(e) {
    this.props.searchStudent(e.target.value);
  }
  render() {
    return <Search onChange={this.OnChange} />;
  }
}
const mapStateToProps = state => ({
  value: state.students.value
});

const mapDispatchToProps = dispatch => ({
  searchStudent: value => dispatch(searchStudent(value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchContainer);
