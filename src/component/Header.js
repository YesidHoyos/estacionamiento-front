import React from 'react';

import '../css/Header.css'

const Header = props => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="top-nav">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center offset-s1">{props.title}</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;