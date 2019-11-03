import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStudents } from "../../actions/students";

export class StudentsList extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    result: PropTypes.array.isRequired,
    getStudents: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const data = this.props.value ? this.props.result : this.props.students;
    console.log(this.props.students);

    function totalMark(obj) {
      return Object.keys(obj).reduce(
        (sum, key) => sum + parseFloat(obj[key] || 0),
        0
      );
    }

    return (
      <div className="container">
        <main className="grid">
          {data.map(student => (
            <article key={student.rollNo}>
              <img
                src="https://picsum.photos/600/400?image=1083"
                alt="student photo"
              ></img>
              <div className="text">
                <h3>{student.name}</h3>
                <p>Roll No:{student.rollNo}</p>
                <p>Total{totalMark(student.marks)}</p>
                <a href="#">Details</a>
              </div>
            </article>
          ))}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students.students,
  result: state.students.result,
  value: state.students.value
});

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentsList);
