import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste react using JSX!
  </h1>
);

// React Functional Component

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
