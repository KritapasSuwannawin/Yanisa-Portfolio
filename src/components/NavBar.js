import { Link } from 'react-router-dom';

import './NavBar.scss';

function NavBar(props) {
  return (
    <div className="nav-bar" style={{ backgroundColor: props.color }}>
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
      </div>
    </div>
  );
}

export default NavBar;
