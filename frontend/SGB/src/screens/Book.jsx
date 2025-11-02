import React from 'react';
import './Book.css';

const Book = () => {
  return (
    <div className="book-page">
      <div className="book-content">
        <header className="header">
          <h1 className="titulo">Buscar libro</h1>
        </header>

        <main className="contenido">
          <div className="buscador">
            <input
              type="text"
              placeholder="Escribe para buscar..."
              aria-label="Buscar libro"
              className="input-buscador"
            />
          </div>

          <section className="resultados">
            <h2 className="subtitulo">Resultados...</h2>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Book;
