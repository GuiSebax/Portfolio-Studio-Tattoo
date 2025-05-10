import React from "react";
import styles from "./News.module.css";

const News = () => {
  const newsItems = [
    {
      title: "Em breve...",
      date: "...",
      content:
        "Em breve teremos novidades para você! Fique ligado! e não perca nada!",
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
