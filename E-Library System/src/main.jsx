import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookProvider>
          <App />
        </BookProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);