import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
};

export default App;
