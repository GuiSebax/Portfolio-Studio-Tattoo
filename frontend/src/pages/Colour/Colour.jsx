import React, { useEffect, useState } from "react";
import styles from "./Colour.module.css";

const Colour = () => {
  const [tattoos, setTattoos] = useState([]); // Estado para armazenar as URLs das imagens
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Fazer requisição para a API do backend
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/images");
        const data = await response.json();
        setTattoos(data); // Atualizar o estado com as URLs das imagens
        setLoading(false); // Desativar o estado de carregamento
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        setLoading(false); // Desativar o estado de carregamento mesmo em caso de erro
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={styles.gallery}>
      {loading ? (
        <p>Carregando imagens...</p>
      ) : (
        tattoos.map((tattoo, index) => (
          <div key={index} className={styles.card}>
            <img
              src={tattoo}
              alt={`Tattoo ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3>Tattoo {index + 1}</h3>
              <p>Descrição ou detalhes da tatuagem podem ir aqui.</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Colour;
