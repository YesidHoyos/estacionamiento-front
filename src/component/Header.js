import React from 'react';

import '../css/Header.css'

const Header = props => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="top-nav white">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo left black-text">{props.title}</a>
            <ul className="right">
              <li><a href="!#" data-target="ingresar" className="waves-effect btn-flat modal-trigger">Ingresar Vehiculo</a></li>
              <li><a href="!#" className="waves-effect btn-flat">Sacar Vehiculo</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;