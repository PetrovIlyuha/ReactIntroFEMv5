import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header css={css``}>
    <Link to="/">Adopt Me!</Link>
    <span aria-label="logo">🐱‍👓</span>
  </header>
);

export default NavBar;
