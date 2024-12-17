import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "554499608501";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá Duda\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.description}>
        Entre em contato conosco para agendar uma consulta ou tirar suas
        dúvidas.
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
          <label htmlFor="message">Orçamento</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
      <div className={styles.contactInfo}>
        <p>Email: info@tattoostudio.com</p>
        <p>Telefone: (44) 9960-8501</p>
        <p>Endereço: Rua das Tatuagens, 123, São Paulo, SP</p>
      </div>
    </div>
  );
};

export default Contact;
