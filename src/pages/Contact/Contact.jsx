import React, { useState } from "react";
import styles from "./Contact.module.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image18 from "../../assets/image18.png";
import image19 from "../../assets/image19.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedProducts: [], // Array para armazenar os produtos selecionados
  });

  const products = [
    { name: "Bermuda Dupla Tactel", image: image1 },
    { name: "Camiseta Dry", image: image2 },
    { name: "Camiseta Dry Tech Athleisure", image: image3 },
    { name: "Jaqueta Tactel Tecnosport", image: image4 },
    { name: "Manga Longa Light Térmica 2º Pele", image: image5 },
    { name: "Regata Dry Army Neck", image: image6 },
    { name: "Bermuda Powerfit", image: image7 },
    { name: "Calça Athenas Light", image: image8 },
    { name: "Calça Legging Peluciada", image: image9 },
    { name: "Camiseta Dry Peccato", image: image10 },
    { name: "Camiseta Fit Line", image: image11 },
    { name: "Legging Seamless Mesh", image: image12 },
    { name: "Regata Cropped", image: image13 },
    { name: "Short Duplo Dry Tech", image: image14 },
    { name: "Short Duplo Tactel", image: image15 },
    { name: "Short Saia Dry", image: image16 },
    { name: "Short Supermicrofibra", image: image17 },
    {
      name: "Top Feminino Estilo do Corpo Opaque Gym",
      image: image18,
    },
    { name: "Top Supermicrofibra", image: image19 },
  ];
  const handleProductSelect = (productName) => {
    setFormData((prevData) => {
      const isSelected = prevData.selectedProducts.includes(productName);
      const updatedProducts = isSelected
        ? prevData.selectedProducts.filter((item) => item !== productName) // Remove se já estiver selecionado
        : [...prevData.selectedProducts, productName]; // Adiciona se não estiver selecionado
      return { ...prevData, selectedProducts: updatedProducts };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, selectedProducts } = formData;
    const phoneNumber = "554488157272";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá. Tenho interesse nos seguintes produtos:\n${selectedProducts.join(
        ", "
      )}\n\nNome: ${name}\nEmail: ${email}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.description}>
        Entre em contato conosco para mais informações sobre nossos produtos.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="selectedProducts">Selecione os produtos</label>
          <div className={styles.customSelect}>
            {products.map((product, index) => (
              <div
                key={index}
                className={`${styles.option} ${
                  formData.selectedProducts.includes(product.name)
                    ? styles.selected
                    : ""
                }`}
                onClick={() => handleProductSelect(product.name)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.optionImage}
                />
                <span>{product.name}</span>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
      <div className={styles.contactInfo}>
        <p>Email: hyperfitbrasil@gmail.com</p>
        <p>Telefone: (44) 98815-7272</p>
        <p>Endereço: 📍 Av. Antônio Volpato 1850, Sarandi, PR</p>
      </div>
    </div>
  );
};

export default Contact;
