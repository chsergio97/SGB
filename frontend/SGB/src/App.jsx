import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Footer from "./components/footer";
import NavbarMain from "./components/navbarmain";
import NavbarMenu from "./components/navbarmenu";

import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Menu from "./screens/Menu/Menu";
import Book from "./screens/Book/Book";
import Reservation from "./screens/Reservation/Reservation";
import Account from "./screens/Account/Account";
import Settings from "./screens/Settings/Settings";

// Componente para proteger rutas privadas
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token || token === "undefined") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppContent() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  const showMainNavbar = pathname === "/";
  const hideNavAndFooter = pathname === "/login" || pathname === "/signup";
  const showNewNavbar = ["/menu", "/libros", "/reservas", "/micuenta", "/configuracion"].includes(pathname);

  return (
    <>
      {!hideNavAndFooter && (
        <>
          {showMainNavbar && <NavbarMain />}
          {showNewNavbar && <NavbarMenu />}
        </>
      )}

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Rutas privadas */}
        <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path="/libros" element={<PrivateRoute><Book /></PrivateRoute>} />
        <Route path="/reservas" element={<PrivateRoute><Reservation /></PrivateRoute>} />
        <Route path="/micuenta" element={<PrivateRoute><Account /></PrivateRoute>} />
        <Route path="/configuracion" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>

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
