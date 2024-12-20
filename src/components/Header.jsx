import React from 'react';
import Menu from './Menu';
import './css_Componentes/header.css';

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="https://1000marcas.net/wp-content/uploads/2019/12/BMW-logo.png" alt="BMW Logo" className="logo" />
        <h1>BMW </h1>
      </div>
      <Menu />
    </header>
  );
}
