import React from "react";
import PropTypes from "prop-types";
import "../../static/students.css";

const Student = ({ name, rollNo, marks }) => (
  <main className="grid">
    <article>
      <img
        src={require("../../static/images/student.png")}
        alt="student photo"
        width="300"
        height="300"
      ></img>
      <div className="text">
        <h3>Name:{name}</h3>
        <p>Roll No:{rollNo}</p>
        <p>Total Marks:{marks}</p>
      </div>
    </article>
  </main>
);

Student.propTypes = {
  name: PropTypes.string.isRequired,
  rollNo: PropTypes.number.isRequired,
  marks: PropTypes.array.isRequired
};

export default Student;
