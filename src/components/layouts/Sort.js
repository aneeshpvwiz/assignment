import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

export class Sort extends Component {
  constructor(props) {
    super(props);
    this.toggleSortName = this.toggleSortName.bind(this);
  }

  toggleSortName(e) {
    console.log("sorting");
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleSortName}>SortName</button>
      </div>
    );
  }
}

export default Sort;
