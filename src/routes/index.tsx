import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import AboutUs from "@/pages/About";
import { default as AllDonator, default as AllRelief } from "@/pages/AllRelief";
import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Volunteer from "@/pages/Volunteer";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/relief-goods",
        element: <AllRelief />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard/all-donators",
        element: <AllDonator />,
      },
    ],
  },
]);
