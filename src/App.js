import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pope",
      animal: "bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      name: "Garfield",
      animal: "cat",
      breed: "Mixed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
