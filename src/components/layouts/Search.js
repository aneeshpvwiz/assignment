import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { searchStudent } from "../../actions/students";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    searchStudent: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    students: PropTypes.array.isRequired
  };

  handleChange(e) {
    this.props.searchStudent(e.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <div className="header">
        <a href="#default" className="logo">
          StudentsRoom
        </a>
        <div className="header-right">
          <input
            className="form-control"
            placeholder="Search"
            onChange={this.handleChange}
            value={value}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.students.value,
  students: state.students.students
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchStudent }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
