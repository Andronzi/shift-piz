import React from "react";
import Navbar from "@src/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@src/components/Footer/Footer";

const Root = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Root;
