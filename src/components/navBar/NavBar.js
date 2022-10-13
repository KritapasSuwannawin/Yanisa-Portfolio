import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

function NavBar(props) {
  const { color } = props;

  const [menuIsActive, setMenuIsActive] = useState(false);

  function menuClickHandler() {
    setMenuIsActive((prev) => !prev);
  }

  const root = document.getElementById('root');
  if (menuIsActive) {
    root.style.maxHeight = window.innerHeight + 'px';
    root.style.overflowY = 'hidden';
  } else {
    root.style.maxHeight = 'unset';
    root.style.overflowY = 'unset';
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
          <Link to="/works" className="nav-link">
            Works
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/certificates" className="nav-link">
            Certificates
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
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
