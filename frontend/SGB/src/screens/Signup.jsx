import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora solo vista
    // Aquí iría la lógica de validación y envío al backend
    console.log('Cuenta creada (vista):', {
      nombres,
      apellidos,
      email,
      fechaNacimiento,
      telefono,
      genero,
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <div className="brand">📚Bibliomaster</div>
      </div>

      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>

          <h2 className="form-title">Crear cuenta</h2>

          <div className="form-field">
            <label htmlFor="nombres">Nombres</label>
            <input
              id="nombres"
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              placeholder="Ingresa tus nombres"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              id="apellidos"
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              placeholder="Ingresa tus apellidos"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>

          <div className="form-field password-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type={mostrarPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="toggle-password"
              aria-label="Mostrar u Ocultar contraseña"
              onClick={() => setMostrarPassword((v) => !v)}
            >
              {mostrarPassword ? 'Ocultar' : 'Ver'}
            </button>
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              id="confirmPassword"
              type={mostrarPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repite la contraseña"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="telefono">Número celular</label>
            <input
              id="telefono"
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej. +51 999 999 999"
            />
          </div>

          <div className="form-field">
            <label htmlFor="genero">Género</label>
            <select
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input
              id="fechaNacimiento"
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn">
              Crear cuenta
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;