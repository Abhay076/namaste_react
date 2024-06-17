import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
  React.createElement("h1", {}, "I'am Namaste React!"),
  React.createElement("h2", {}, "I'am h2 Tag"),
]), React.createElement("div", { id: "child1" }, [
  React.createElement("h1", {}, "I'am h1 Tag"), 
  React.createElement("h2", {}, "I'am h2 Tag"),
])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
