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
    const students = this.props.studentsList;
    return (
      <StudentList>
        {students.map(student => (
          <Student
            key={student.rollNo}
            name={student.name}
            rollNo={student.rollNo}
            marks={student.marks}
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
      name: PropTypes.number.isRequired
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
