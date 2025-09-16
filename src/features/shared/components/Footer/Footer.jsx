import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + Nombre */}
        <div className={styles.brand}>
          <span className={styles.logo}>🎵</span>
          <h3>Vinilos Retro</h3>
        </div>

        {/* Redes sociales */}
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📷</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
        </div>
      </div>

      <p className={styles.copy}>
        © 2025 Vinilos Retro - Todos los derechos reservados
      </p>
    </footer>
  );
}
