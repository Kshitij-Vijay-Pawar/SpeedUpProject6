import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid p-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
