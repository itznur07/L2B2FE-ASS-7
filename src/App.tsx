import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const App = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <>
      <div data-theme={mode.mode}>
        <MainLayout>
          <Home />
        </MainLayout>
      </div>
    </>
  );
};

export default App;
