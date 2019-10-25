import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <header
      css={css`
        background: linear-gradient(to right, #1e130c, ${colors.light});
        padding: ${padding}px;
        border-radius: 10px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 50px;
          margin-right: 30px;
          display: inline-block;
          animation: 30s ${spin} linear infinite;
        `}
        role="img"
        aria-label="logo"
      >
        🐱‍👓
      </span>
    </header>
  );
};

export default NavBar;
