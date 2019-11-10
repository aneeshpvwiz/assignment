import React, { Fragment } from "react";
import Search from "./Search";
import Sort from "./Sort";
import SearchContainer from "../../containers/SearchContainer";
import SortContainer from "../../containers/SortContainer";

function Header() {
  return (
    <Fragment>
      <div className="header">
        <a href="#">StudentsRoom</a>
        <div className="header-right">
          <SortContainer />
          <SearchContainer />
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
