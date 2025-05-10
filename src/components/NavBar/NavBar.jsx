import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/LOGO2.png";

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
              to="/?p=home"
            >
              Home
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/?p=colour"
            >
              Produtos
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/?p=about"
            >
              Sobre
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/?p=contact"
            >
              Contato
            </NavLink>
          </div>
          <div className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.estaativo : styles.naoestaativo
              }
              to="/?p=news"
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
