import React from 'react';
import '../Reservation/Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation-page">
      <main className="reservation-main">
        <header className="header">
          <h1 className="titulo">Mis Reservas</h1>
        </header>

        <section className="contenido">
          <div className="reservas-lista">
            <h2 className="subtitulo">Libros reservados</h2>

            <div className="placeholder">
              Aún no tienes libros reservados.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reservation;
