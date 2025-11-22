import React from "react";
import { motion } from "framer-motion";   //descargar npm install framer-motion
import '../Home/Main.css'

export default function Home() {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text">
          <h2>Bienvenido LectorMaster</h2>
          <p>
            Explora, reserva y disfruta de nuestra colección de libros en línea.
          </p>
        </div>
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="https://static.vecteezy.com/system/resources/previews/060/515/732/non_2x/little-boy-reading-a-book-free-png.png" 
          alt="Niño leyendo" />
        </motion.div>
      </motion.section>

      {/* Books Section */}
      <motion.section
        className="books-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3>¿Qué encontrarás?</h3>
        <p>
          En BiblioMaster encontrarás una enorme variedad de libros en línea,
          podrás buscar y reservar tu libro preferido para ayudarte en tus tareas,
          en tus tiempos libres, diversión, estudio y mucho más.
        </p>
        <div className="book-gallery">
          {["https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201800/mejores-libros-Don-Quijote-sf.jpg", 
          "https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg?class=article",
           "https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2016/09/mago-de-oz.jpg"].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Libro ${i + 1}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h3>Acerca de nosotros</h3>
        <p>
          BiblioMaster nace con el propósito de acercar el conocimiento a todas las
          personas, sin importar el lugar ni el momento. A través de nuestra
          plataforma, podrás explorar, reservar y leer una amplia colección de libros
          digitales que abarcan desde la literatura clásica hasta las últimas
          publicaciones científicas.
        </p>
        <p>
          Creemos que la lectura es una puerta abierta al aprendizaje y al crecimiento
          personal. Por eso, trabajamos cada día para ofrecerte un espacio moderno,
          accesible y gratuito, donde cada lector pueda descubrir nuevas historias y
          expandir sus horizontes.
        </p>
        <p>
          Nuestra misión es fomentar el amor por la lectura y el acceso al saber,
          combinando la esencia de las bibliotecas tradicionales con la comodidad de la
          era digital.
        </p>
      </motion.section>
    </main>
  );
}
