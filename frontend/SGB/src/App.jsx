import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/footer";
import NavbarMain from "./components/navbarmain";
import NavbarMenu from "./components/navbarmenu";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Menu from "./screens/Menu";
import Book from "./screens/Book"; 

function AppContent() {
  const location = useLocation();
  const { pathname } = location;
  console.log("Current pathname:", pathname);

  const showMainNavbar = pathname === "/";
  const hideAllNavbar = ["/login", "/signup"].includes(pathname);
  const showNewNavbar = ["/menu", "/libros", "/reserva", "/micuenta", "/configuracion"].includes(pathname);

  return (
    <>
      {showMainNavbar && <NavbarMain />}
      {showNewNavbar && <NavbarMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/libros" element={<Book />} />
        <Route path="/reserva" element={<Book />} />
        <Route path="/micuenta" element={<Book />} />
        <Route path="/configuracion" element={<Book />} />



      </Routes>

      {!hideAllNavbar && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
