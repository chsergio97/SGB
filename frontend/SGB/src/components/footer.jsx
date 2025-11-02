import React from "react";
import '../components/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>BiblioMaster</h2>
      </div>
      <div className="footer-center">
        <p>Síguenos en nuestras redes sociales</p>
        <ul>
          <li>Facebook</li>
          <li>X</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-right">
        <p>San Salvador, El Salvador</p>
        <p>+503 12345678</p>
        <p>bibliomaster@edu.sv</p>
      </div>
    </footer>
  );
}
