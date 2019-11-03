import React, { Component } from "react";

export class StudentsList extends Component {
  render() {
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
              <p>Total</p>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default StudentsList;
