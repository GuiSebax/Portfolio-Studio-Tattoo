import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p className={styles.description}>
        Bem-vindo à nossa loja de roupas, um espaço pensado para quem valoriza
        estilo, autenticidade e conforto. Aqui, cada peça é escolhida com
        carinho para ajudar você a se expressar através da moda.
      </p>
      <h2 className={styles.subtitle}>Nossa História</h2>
      <p className={styles.text}>
        A ideia nasceu de forma inesperada — quase do nada. Foi em uma conversa
        despretensiosa que surgiu a vontade de criar um lugar onde moda e
        identidade se encontrassem de forma leve e acessível. E assim, a loja
        tomou forma, unindo paixão, criatividade e muito trabalho.
      </p>
      <h2 className={styles.subtitle}>Nosso Estilo</h2>
      <p className={styles.text}>
        Trabalhamos com roupas casuais, modernas e versáteis, sempre atentos às
        tendências, mas sem abrir mão do que realmente importa: vestir bem e se
        sentir bem. Nossa curadoria prioriza qualidade, conforto e peças que
        falam por si só.
      </p>
    </div>
  );
};

export default About;
