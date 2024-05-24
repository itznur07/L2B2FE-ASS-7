import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='main-layout'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
