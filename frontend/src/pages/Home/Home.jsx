import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeMessage}>Bem-vindo ao Tattoo Studio</h1>
      <p className={styles.introText}>Onde a arte ganha vida na sua pele.</p>
    </div>
  );
};

export default Home;
