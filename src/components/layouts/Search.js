import React, { Component } from "react";
function Search(props) {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search..."
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
}

export default Search;
