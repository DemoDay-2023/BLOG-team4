import React from "react";
import ReactDOM from "react-dom/client";
import ARouter from "./ARouter";
import "./index.css"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ARouter />
  </React.StrictMode>
);

reportWebVitals();
