import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Dry" animal="Fish" breed="party" />
      <Pet name="Smoke" animal="hawk" breed="Rocky Hawk" />
      <Pet name="Smiley" animal="tortoise" breed="sea turtle" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
