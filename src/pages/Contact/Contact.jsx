import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedProducts: [], // Array para armazenar os produtos selecionados
  });

  const products = [
    { name: "Bermuda Dupla Tactel", image: "./image1.png" },
    { name: "Camiseta Dry", image: "./image2.png" },
    { name: "Camiseta Dry Tech Athleisure", image: "./image3.png" },
    { name: "Jaqueta Tactel Tecnosport", image: "./image4.png" },
    { name: "Manga Longa Light Térmica 2º Pele", image: "./image5.png" },
    { name: "Regata Dry Army Neck", image: "./image6.png" },
    { name: "Bermuda Powerfit", image: "./image7.png" },
    { name: "Calça Athenas Light", image: "./image8.png" },
    { name: "Calça Legging Peluciada", image: "./image9.png" },
    { name: "Camiseta Dry Peccato", image: "./image10.png" },
    { name: "Camiseta Fit Line", image: "./image11.png" },
    { name: "Legging Seamless Mesh", image: "./image12.png" },
    { name: "Regata Cropped", image: "./image13.png" },
    { name: "Short Duplo Dry Tech", image: "./image14.png" },
    { name: "Short Duplo Tactel", image: "./image15.png" },
    { name: "Short Saia Dry", image: "./image16.png" },
    { name: "Short Supermicrofibra", image: "./image17.png" },
    { name: "Top Feminino Estilo do Corpo Opaque Gym", image: "./image18.png" },
    { name: "Top Supermicrofibra", image: "./image19.png" },
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
