import Sidebar from "@/components/shared/Sidebar";
import Container from "@/components/ui/container";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div data-theme='light'>
      <Container>
        <div className='flex gap-2'>
          <div>
            <Sidebar />
          </div>
          <Outlet></Outlet>
        </div>
      </Container>
    </div>
  );
};

export default AdminLayout;
