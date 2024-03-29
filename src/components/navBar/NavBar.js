import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar(props) {
  const { color } = props;

  const [menuIsActive, setMenuIsActive] = useState(false);

  function menuClickHandler() {
    setMenuIsActive((prev) => !prev);
  }

  const page = document.getElementById('root').firstElementChild;
  if (page) {
    if (menuIsActive) {
      window.scrollTo(0, 0);
      page.style.position = 'fixed';
      page.style.width = '100%';
    } else {
      page.style.position = '';
      page.style.width = '';
    }
  }

  let sidebarBackgroundColor = '#9d94ff';
  if (color === '#9D94FF') {
    sidebarBackgroundColor = '#6154f2';
  } else if (color === '#F6A546') {
    sidebarBackgroundColor = '#f8b464';
  }

  return (
    <div className="nav-bar" style={{ backgroundColor: color }}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-name">
            <span className="nav-bold">Yanisa</span>
            <br></br>New
          </Link>
        </div>
        <div className="nav-right">
          <NavLink to="/works" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Works
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            About
          </NavLink>
          <NavLink to="/certificates" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Certificates
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Contact
          </NavLink>
        </div>
        <div className={`nav-menu ${menuIsActive ? 'active' : ''}`} onClick={menuClickHandler}>
          <div className="nav-menu__line top"></div>
          <div className="nav-menu__line middle"></div>
          <div className="nav-menu__line bottom"></div>
        </div>
      </div>
      <div className={`nav-sidebar ${menuIsActive ? 'active' : ''}`} style={{ backgroundColor: sidebarBackgroundColor }}>
        <Link to="/works" className="nav-sidebar__link">
          Works
        </Link>
        <Link to="/about" className="nav-sidebar__link">
          About
        </Link>
        <Link to="/certificates" className="nav-sidebar__link">
          Certificates
        </Link>
        <Link to="/contact" className="nav-sidebar__link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
