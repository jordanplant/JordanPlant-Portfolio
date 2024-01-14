import React from "react";
import Navbar from "/Sections/Navbar";
import Footer from "/Sections/Footer"; // Assuming you have a Footer component
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
