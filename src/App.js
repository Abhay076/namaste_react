import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

// Not using keys (not acceptable) <<<< index as keys <<<<<<<<<<<<<<< uinque id (best practice)

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
