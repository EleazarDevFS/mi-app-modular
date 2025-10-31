import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

const Header = ({ themeSwitcher }) => {
  return (
    <header className="app-header">
      <div className="logo-nav">
        <Link to="/" className="logo">
          <img src='logotipo2.png' alt="Logo" className='image-logo'/>
        </Link>
        <nav className='center-head-text'>
          {/* Usamos <Link> en lugar de <a href=""> */}
          <Link to="/">Inicio</Link>
          <Link to="/tareas">Tareas</Link>
          <Link to="/directorio">Directorio</Link>
        </nav>
      </div>
      {themeSwitcher}
    </header>
  );
};

export default Header;