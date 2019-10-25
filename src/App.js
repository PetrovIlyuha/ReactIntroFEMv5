import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("teal");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1 className="spinner">loading route</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
