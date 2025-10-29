import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bienvenido a la Aplicación de Demostración</h2>
      <p>
        Usa la navegación de arriba para visitar el 
        Directorio de Usuarios o la Lista de Tareas.
      </p>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Tareas</h3>
          <p>Gestiona tus tareas diarias de manera eficiente</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Directorio</h3>
          <p>Explora el directorio de usuarios conectados</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Temas</h3>
          <p>Personaliza tu experiencia con modo claro/oscuro</p>
        </div>
      </div>
    </div>
  );
};

export default Home;