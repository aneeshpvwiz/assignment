import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchStudent, getStudents } from "../../actions/students";

import StudentsList from "../students/StudentsList";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleSortName = this.toggleSortName.bind(this);
    this.state = { sortAscending: false };
  }
  static propTypes = {
    searchStudent: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    students: PropTypes.array.isRequired,
    result: PropTypes.array.isRequired,
    getStudents: PropTypes.func.isRequired
  };

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

  handleChange(e) {
    this.props.searchStudent(e.target.value);
  }

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const value = this.props.value;
    const data = this.props.value ? this.props.result : this.props.students;
    console.log(this.state.sortAscending);
    return (
      <Fragment>
        <div>
          <a href="#default">StudentsRoom</a>
          <div>
            <input
              placeholder="Search"
              onChange={this.handleChange}
              value={value}
            />
            <button onClick={this.toggleSortName}>SortName</button>
          </div>
        </div>

        {data.map(student => {
          return (
            <StudentsList
              key={student.rollNo}
              name={student.name}
              rollNo={student.rollNo}
              marks={student.marks}
            />
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  value: state.students.value,
  students: state.students.students,
  result: state.students.result
});

export default connect(
  mapStateToProps,
  { getStudents, searchStudent }
)(Search);
