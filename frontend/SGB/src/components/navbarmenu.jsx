import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMenu.css";

export default function NavbarMenu() {
  return (
    <nav className="navbar-menu">
      <div className="navbar-left">
        <h2 className="navbar-title">📚BiblioMaster</h2>
      </div>
      <div className="navbar-right">
        <Link to="/libros" className="nav-link">Libros</Link>
        <Link to="/reservas" className="nav-link">Reservas</Link>
        <Link to="/micuenta" className="nav-link">Mi cuenta</Link>
        <Link to="/configuracion" className="nav-link">Configuraciones</Link>
      </div>
    </nav>
  );
}
