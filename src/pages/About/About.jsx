import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p className={styles.description}>
        Bem-vindo ao Tattoo Studio, onde a arte ganha vida na sua pele. Nosso
        estúdio é dedicado a criar tatuagens únicas e personalizadas que
        refletem a individualidade de cada cliente.
      </p>
      <h2 className={styles.subtitle}>Nossa História</h2>
      <p className={styles.text}>
        Fundado em 2010, o Tattoo Studio tem se destacado pela qualidade e
        criatividade de suas tatuagens. Nossa equipe de artistas talentosos está
        comprometida em proporcionar uma experiência excepcional para cada
        cliente.
      </p>
      <h2 className={styles.subtitle}>Nossos Artistas</h2>
      <p className={styles.text}>
        Nossa equipe é composta por artistas experientes e apaixonados pela arte
        da tatuagem. Cada um traz seu próprio estilo e especialidade, garantindo
        que você encontre o artista perfeito para sua próxima tatuagem.
      </p>
    </div>
  );
};

export default About;
