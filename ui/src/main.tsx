import React from "react";
import ReactDOM from "react-dom/client";
// Base styles first: the ds reset styles bare elements ([type="button"] etc.)
// at the same specificity as component classes, so components must come later.
import "@ds/styles.css";
import "./global.css";
import App from "./App";

// The LogDoc theme hangs off <html data-theme="logdoc" class="dark">. index.html
// sets it, but the snapshot export writes its own <html>, so set it here too.
document.documentElement.dataset.theme = "logdoc";
document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
