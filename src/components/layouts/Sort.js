import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { searchStudent, getStudents } from "../../actions/students";

import Search from "./Search";

export class Sort extends Component {
  constructor(props) {
    super(props);
    this.toggleSortName = this.toggleSortName.bind(this);
    this.state = { sortAscending: false };
  }

  static propTypes = {
    students: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getStudents();
  }

  toggleSortName() {
    this.setState({
      sortAscending: !this.state.sortAscending
    });
    if (this.state.sortAscending) {
      this.props.students.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    } else {
      this.props.students.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
    }
  }

  render() {
    //console.log(this.props.students);
    return (
      <Fragment>
        <button onClick={this.toggleSortName}>SortName</button>
        <Search students={this.props.students} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students.students
});

export default connect(
  mapStateToProps,
  { getStudents, searchStudent }
)(Sort);
