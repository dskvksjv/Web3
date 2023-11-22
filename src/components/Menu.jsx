import '../css/Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/products">Товари</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
