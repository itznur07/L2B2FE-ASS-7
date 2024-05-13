import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div data-theme='light'>
      <MainLayout>
        <App />
      </MainLayout>
    </div>
  </React.StrictMode>
);
