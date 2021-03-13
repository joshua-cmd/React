import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import for Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import for Font Awesome
import "font-awesome/css/font-awesome.css";
// import for Bootstrap Social
import "bootstrap-social/bootstrap-social.css";
import "typeface-lobster";
import "typeface-open-sans";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
