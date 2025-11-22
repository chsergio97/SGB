import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        nombres,
        apellidos,
        nickname,
        email,
        password,
        telefono,
        genero,
        fechaNacimiento
      });

      alert(res.data.message);

      // Si tu backend devuelve token, guardarlo
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      // Redirigir al login o menú
      navigate('/login');

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Error al crear cuenta');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <div className="brand">📚Bibliomaster</div>
      </div>

      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Crear cuenta</h2>

          {/* Nombres, Apellidos, Email */}
          <input placeholder="Nombres" value={nombres} onChange={e => setNombres(e.target.value)} required />
          <input placeholder="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)} required />
          <input placeholder="Nickname" value={nickname} onChange={e => setNickname(e.target.value)} required />
          <input placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required />

          {/* Contraseña */}
          <input
            type={mostrarPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type={mostrarPassword ? 'text' : 'password'}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)}>
            {mostrarPassword ? 'Ocultar' : 'Ver'}
          </button>

          {/* Otros datos */}
          <input placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
          <select value={genero} onChange={e => setGenero(e.target.value)}>
            <option value="">Género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          <input type="date" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} required />

          <button type="submit" className="primary-btn">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
