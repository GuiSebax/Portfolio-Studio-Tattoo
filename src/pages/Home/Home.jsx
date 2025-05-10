import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeMessage}>Bem-vindo a HyperFit Brasil</h1>
      <p className={styles.introText}>
        Forme o seu estilo. Garanta já a sua vestimenta.
      </p>
    </div>
  );
};

export default Home;
