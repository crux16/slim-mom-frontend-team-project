import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="images/logo.png" alt="slimlogo" />
        Slim Mom
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/diary" className="nav-link">
            Diary
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/registration" className="nav-link">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
