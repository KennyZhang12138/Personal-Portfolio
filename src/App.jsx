import { Outlet } from "react-router-dom";
import { useState } from "react";
import Narbar from "./components/Narbar";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Narbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
