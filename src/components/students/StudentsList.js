import React, { Component } from "react";

export class StudentsList extends Component {
  render() {
    const student = this.props.student;

    function totalMark(obj) {
      return Object.keys(obj).reduce(
        (sum, key) => sum + parseFloat(obj[key] || 0),
        0
      );
    }
    return (
      <div className="container">
        <main className="grid">
          <article key={this.props.rollNo}>
            <img
              src="https://picsum.photos/600/400?image=1083"
              alt="student photo"
            ></img>
            <div className="text">
              <h3>{this.props.name}</h3>
              <p>Roll No:{this.props.rollNo}</p>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default StudentsList;
