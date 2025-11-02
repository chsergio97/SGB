import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="overlay">
        <h1 className="menu-title">Bienvenido :D</h1>
        <div className="menu-buttons">
          <button className="menu-btn">Buscar Libro</button>
          <button className="menu-btn">Reservar Libro</button>
        </div>
      </div>
    </div>
  );
}
