import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lucy",
      animal: "Dog",
      breed: "Toy-terrier"
    }),
    React.createElement(Pet, {
      name: "Sunshine",
      animal: "Parrot",
      breed: "Galapagos"
    }),
    React.createElement(Pet, {
      name: "Marseille",
      animal: "Shark",
      breed: "Great White"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
