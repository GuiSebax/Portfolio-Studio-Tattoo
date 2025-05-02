import React from "react";
import styles from "./Footer.module.css";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* <FacebookLogo size={25} className={styles.icon} /> */}
        <a href="https://www.instagram.com/hyperfitbrasil/" target="_blank">
          <InstagramLogo size={25} className={styles.icon} />
        </a>
        {/* <WhatsappLogo size={25} className={styles.icon} /> */}
      </div>
      <p>© 2025 HyperFit Brasil</p>
      <p>
        Qualquer dúvida:{" "}
        <a href="mailto:hyperfitbrasil@gmail.com" className={styles.emailLink}>
          hyperfitbrasil@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
