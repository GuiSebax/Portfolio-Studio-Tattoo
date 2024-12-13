import React from "react";
import styles from "./News.module.css";

const News = () => {
  const newsItems = [
    {
      title: "Novo Artista no Estúdio",
      date: "01/10/2023",
      content:
        "Estamos empolgados em anunciar a chegada de um novo artista ao nosso estúdio. Venha conhecê-lo e conferir seu trabalho incrível!",
    },
    {
      title: "Promoção de Tatuagens",
      date: "15/09/2023",
      content:
        "Aproveite nossa promoção especial de tatuagens durante o mês de setembro. Descontos incríveis em todos os estilos!",
    },
    {
      title: "Evento de Arte",
      date: "30/08/2023",
      content:
        "Participe do nosso evento de arte e conheça outros entusiastas da tatuagem. Haverá workshops, exposições e muito mais!",
    },
    // Adicione mais itens de notícias conforme necessário
  ];

  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.title}>Novidades</h1>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <h2 className={styles.newsTitle}>{item.title}</h2>
          <p className={styles.newsDate}>{item.date}</p>
          <p className={styles.newsContent}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
