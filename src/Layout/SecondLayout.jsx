import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SecondLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid p-0 secoundlayout">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default SecondLayout;
