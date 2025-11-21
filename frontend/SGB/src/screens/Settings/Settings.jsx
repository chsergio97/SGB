import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './settings.css';

const Settings = ({ user: userProp }) => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ usuario: '', password: '', confirm: '' });

  useEffect(() => {
    // Carga usuario desde prop, localStorage o mock
    if (userProp) {
      setUser(userProp);
      localStorage.setItem('miCuenta', JSON.stringify(userProp));
      setForm({ usuario: userProp.usuario || '', password: '', confirm: '' });
      return;
    }

    const stored = localStorage.getItem('miCuenta');
    if (stored) {
      try {
        const u = JSON.parse(stored);
        setUser(u);
        setForm({ usuario: u.usuario || '', password: '', confirm: '' });
      } catch {
        setUser(null);
      }
    } else {
      const demo = {
        nombreCompleto: 'Nombre Completo',
        usuario: 'usuario01',
        correo: 'usuario@example.com',
        oficio: 'estudiante',
      };
      setUser(demo);
      setForm({ usuario: demo.usuario, password: '', confirm: '' });
    }
  }, [userProp]);

  if (!user) return (
    <div className="page-wrap">
      <div className="settings-container"><p>Cargando...</p></div>
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de guardado (BE o local)
    // Como ejemplo, actualizamos usuario en localStorage
    const updated = { ...user, usuario: form.usuario };
    setUser(updated);
    localStorage.setItem('miCuenta', JSON.stringify(updated));
    alert('Configuración guardada (modo mock).');
  };

  return (
    <div className="page-wrap">
      <div className="settings-container">
        <h1 className="settings-title">Configuración</h1>

        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Editar usuario:</label>
            <input
              type="text"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Cambiar contraseña:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Nueva contraseña"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Confirmar contraseña:</label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              className="form-input"
              placeholder="Confirmar contraseña"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">Guardar cambios</button>
            <Link to="/" className="back-link">Ayuda y asistencia</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;