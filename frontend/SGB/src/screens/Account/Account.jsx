import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './account.css';

const Account = ({ user: userProp }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userProp) {
      setUser(userProp);
      localStorage.setItem('miCuenta', JSON.stringify(userProp));
      return;
    }

    const stored = localStorage.getItem('miCuenta');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    } else {
      const demo = {
        nombreCompleto: 'Nombre Completo',
        usuario: 'usuario01',
        correo: 'usuario@example.com',
        oficio: 'estudiante',
        reservas: [
          { id: 1, titulo: 'Reserva de biblioteca', fecha: '2025-11-20' },
        ],
      };
      setUser(demo);
      localStorage.setItem('miCuenta', JSON.stringify(demo));
    }
  }, [userProp]);

  if (!user) return (
    <div className="page-wrap">
      <div className="account-container"><p>Cargando...</p></div>
    </div>
  );

  return (
    <div className="page-wrap">
      <div className="account-container">
        <div className="account-profile">
          <div className="avatar-placeholder" aria-label="avatar">👤</div>
          <button className="change-photo-btn">Cambiar foto de perfil</button>
        </div>

        <div className="account-details">
          <h1 className="account-title">Mi cuenta</h1>

          <div className="account-row">
            <span className="label">Nombre completo</span>
            <span className="value">{user.nombreCompleto}</span>
          </div>

          <div className="account-row">
            <span className="label">usuario</span>
            <span className="value">{user.usuario}</span>
          </div>

          <div className="account-row">
            <span className="label">correo</span>
            <span className="value">{user.correo}</span>
          </div>

          <div className="account-row">
            <span className="label">oficio</span>
            <span className="value">{user.oficio}</span>
          </div>

          <div className="account-reservas">
            <Link to="/reservas" className="reservas-link">Mis reservas</Link>
            <ul className="reservas-list">
              {user.reservas?.length ? user.reservas.map(r => (
                <li key={r.id} className="reserva-item">{r.titulo} - {r.fecha}</li>
              )) : (
                <li className="reserva-item">No hay reservas.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;