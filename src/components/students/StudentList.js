import React from "react";
import PropTypes from "prop-types";

const StudentList = ({ children }) => <div className="grid">{children}</div>;

StudentList.propTypes = {
  children: PropTypes.node
};

export default StudentList;
