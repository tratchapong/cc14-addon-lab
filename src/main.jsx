import React from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
