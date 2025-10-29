import React from 'react';
import './Welcome.css';

const Welcome = ({ nombre }) => {
  const nombreMostrar = nombre === 'Desarrollador' ? 'You are cool' : nombre;
  
  return (
    <div className="welcome-container">
      <h2>Bienvenido, {nombreMostrar}!</h2>
      <p>Este es un ejemplo de un componente modularizado con un diseño moderno y atractivo.</p>
      <div className="welcome-badge">
        ✨ Desarrollador Pro
      </div>
    </div>
  );
};

export default Welcome;