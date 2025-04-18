import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/LOGO.png";

import useIsMobile from "../../hooks/useIsMobile";

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <header className={styles.cabecalho}>
      <img src={Logo} alt="img.png" />
      {!isMobile ? (
        <nav className={styles.navbar}>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/tattoo/?p=home"
            >
              Home
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/tattoo/?p=colour"
            >
              Trabalhos
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/tattoo/?p=about"
            >
              Sobre
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/tattoo/?p=contact"
            >
              Contato
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/tattoo/?p=news"
            >
              Novidades
            </NavLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
};
export default NavBar;
