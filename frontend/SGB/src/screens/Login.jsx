import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../screens/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/menu');
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="brand">📚Bibliomaster</div>
      </header>

      <main className="login-container">
        <section className="card">
          <h2 className="card-title">Iniciar sesión</h2>
          <h1 className="welcome-title">Bienvenido Lector</h1>

          <form onSubmit={onSubmit} className="form">
            <div className="field">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </div>

            <div className="field">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>

            <button type="submit" className="btn-primary">
              Iniciar sesión
            </button>
          </form>

          <div className="signup">
            ¿No tienes cuenta?{" "}
            <span
              className="link-disabled"
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() => navigate('/signup')} 
            >
              Crea una cuenta
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
