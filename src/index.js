import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/SourceSansPro/source-sans-pro.bold.ttf";
import "./fonts/SourceSansPro/source-sans-pro.regular.ttf";
import "./fonts/OpenSans/open-sans.regular.ttf";
import "./fonts/Poppins/Poppins-Bold.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
