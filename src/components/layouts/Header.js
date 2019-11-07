import React, { Fragment } from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header() {
  return (
    <Fragment>
      <Search />
      <Sort />
    </Fragment>
  );
}

export default Header;
