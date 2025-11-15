import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/footer";
import NavbarMain from "./components/navbarmain";
import NavbarMenu from "./components/navbarmenu";

import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Menu from "./screens/Menu/Menu";
import Book from "./screens/Book/Book";

function AppContent() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase(); // 🔥 Asegura coincidencias en minúscula

  const showMainNavbar = pathname === "/";
  const hideNavAndFooter = pathname === "/login" || pathname === "/signup";
  const showNewNavbar = ["/menu", "/libros", "/reserva", "/micuenta", "/configuracion"].includes(pathname);

  return (
    <>
      {!hideNavAndFooter && (
        <>
          {showMainNavbar && <NavbarMain />}
          {showNewNavbar && <NavbarMenu />}
        </>
      )}

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

      {/* 🔥 Footer solo se muestra si no estamos en login/signup */}
      {!hideNavAndFooter && <Footer />}
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
