import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";

const AppLayout = () => {
  return (
    <div>
      <h1>App is working</h1>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
