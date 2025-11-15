import React from 'react';
import '../Book/Book.css';

const Book = () => {
  return (
    <div className="book-page">
      <main className="book-main">
        <header className="header">
          <h1 className="titulo">Buscar libro</h1>
        </header>

        <section className="contenido">
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
        </section>
      </main>
    </div>
  );
};

export default Book;
