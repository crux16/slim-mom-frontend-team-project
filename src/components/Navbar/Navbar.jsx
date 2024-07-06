import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import logo from 'assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive, isPending, isTransitioning }) => {
    return isActive || isPending || isTransitioning
      ? `${css.link} ${css.activeLink}`
      : css.link;
  };

  return (
    <nav className={css.navbar}>
      <NavLink to="/" className={css.logo}>
        <img src={logo} alt="SlimMom" />
        <h1>
          Slim<span className={css.orange}>Mom</span>
        </h1>
      </NavLink>
      <div className={css.verticalLine}></div>
      <ul className={css.navList}>
        <li>
          <NavLink to="/login" className={linkClass}>
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={linkClass}>
            Registration
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/diary" className={linkClass}>
            Diary
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" className={linkClass}>
            Calculator
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
