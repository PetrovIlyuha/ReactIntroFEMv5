import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
