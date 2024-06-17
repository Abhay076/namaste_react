import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
  "div",
  { id: "parent" },
 "Namaste React!"
);

console.log(heading);

//JSX - HTML-Like or XML-like syntax

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id='heading'>Namaste react using JSX!</h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
