import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStudents } from "../../actions/students";

export class StudentsList extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    getStudents: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        <h2>Students Detail</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Class</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.rollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students.students
});

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentsList);
