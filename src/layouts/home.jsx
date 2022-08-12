import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

export default function HomeLayouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
