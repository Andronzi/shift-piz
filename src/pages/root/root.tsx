import Footer from "@src/components/Footer/Footer";
import Navbar from "@src/components/Navbar/Navbar";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => (
  <>
    <Navbar />
    <Outlet />
    <Toaster />
    <Footer />
  </>
);

export default Root;
