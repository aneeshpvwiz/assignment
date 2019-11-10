import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStudents } from "../actions/students";

import StudentList from "../components/students/StudentList";
import Student from "../components/students/Student";

export class StudentContainer extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    function totalMark(obj) {
      return Object.keys(obj).reduce(
        (sum, key) => sum + parseFloat(obj[key] || 0),
        0
      );
    }
    const students = this.props.studentsList;
    return (
      <StudentList>
        {students.map(student => (
          <Student
            key={student.rollNo}
            name={student.name}
            rollNo={student.rollNo}
            totalmark={totalMark(student.marks)}
          />
        ))}
      </StudentList>
    );
  }
}

StudentContainer.propTypes = {
  studentsList: PropTypes.arrayOf(
    PropTypes.shape({
      rollNo: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      marks: PropTypes.array.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => ({
  studentsList: state.students.studentsList
});

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentContainer);
