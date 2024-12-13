import React from "react";
import styles from "./Colour.module.css";

// Imagens
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const Colour = () => {
  const tattoos = [img1, img2, img3, img4, img5, img6];
  return (
    <div className={styles.gallery}>
      {tattoos.map((tattoo, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={tattoo}
            alt={`Tattoo ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Colour;
