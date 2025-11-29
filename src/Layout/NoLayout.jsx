import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NoLayout = () => {
  return (
    <>
      <main className="container-fluid p-0 nolayout">
        <Outlet />
      </main>
    </>
  );
};

export default NoLayout;
