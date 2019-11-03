import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { searchStudent } from "../../actions/students";
import { StudentsList } from "../students/StudentsList";
import { getStudents } from "../../actions/students";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], name: "Aneesh" };
    //this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    result: PropTypes.array.isRequired,
    students: PropTypes.array.isRequired,
    searchStudent: PropTypes.func.isRequired,
    getStudents: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(props) {
    return {
      data: props.students
    };
  }

  handleChange = e => {
    //this.props.searchStudent(e.target.value);
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    console.log(this.state.name);
    const { value } = this.props.value;

    return (
      <div>
        <div className="header">
          <a href="#default" className="logo">
            StudentsRoom
          </a>
          <div className="header-right">
            <input
              className="form-control"
              placeholder="Search"
              //onChange={e => searchStudent(e.target.value)}
              onChange={this.handleChange}
              value={value}
            />
          </div>
        </div>

        {this.state.data.map(student => {
          return (
            <StudentsList
              key={student.rollNo}
              name={student.name}
              marks={student.marks}
              rollNo={student.rollNo}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.students.result,
  students: state.students.students,
  value: state.students.value
});

export default connect(
  mapStateToProps,
  { getStudents, searchStudent }
)(Search);
