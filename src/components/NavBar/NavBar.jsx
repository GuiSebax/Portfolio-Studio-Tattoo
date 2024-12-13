import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/banner1.png";

const NavBar = () => {
  return (
    <header className={styles.cabecalho}>
      <img src={Logo} alt="img.png" />
      <nav className={styles.navbar}>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.estaativo : styles.naoestaativo
            }
            to="/Home"
          >
            Home
          </NavLink>
        </div>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.estaativo : styles.naoestaativo
            }
            to="/colour"
          >
            Trabalhos
          </NavLink>
        </div>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.estaativo : styles.naoestaativo
            }
            to="/about"
          >
            Sobre
          </NavLink>
        </div>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.estaativo : styles.naoestaativo
            }
            to="/contact"
          >
            Contato
          </NavLink>
        </div>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.estaativo : styles.naoestaativo
            }
            to="/news"
          >
            Novidades
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
