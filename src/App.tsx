import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

interface ModeState {
  mode: "light" | "dark";
}
const App: React.FC<{}> = () => {
  const mode = useSelector((state: ModeState) => state.mode);

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
