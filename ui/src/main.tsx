import React from "react";
import ReactDOM from "react-dom/client";
// Base styles first: the ds reset styles bare elements ([type="button"] etc.)
// at the same specificity as component classes, so components must come later.
import "@ds/styles.css";
import "./global.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
