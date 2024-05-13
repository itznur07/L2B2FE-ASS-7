import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
