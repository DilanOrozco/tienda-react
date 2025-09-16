import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo + título */}
      <NavLink to="/" className={styles.logo}>
        <span>Vinilos Retro</span>
      </NavLink>

      {/* Botón hamburguesa */}
      <div
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navegación */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Productos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Contactanos
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeLink} ${styles.cartLink}`
              : `${styles.link} ${styles.cartLink}`
          }
          onClick={() => setMenuOpen(false)}
        >
          Carrito
          {cart.length > 0 && (
            <span className={styles.cartBadge}>{cart.length}</span>
          )}
        </NavLink>
      </nav>
    </header>
  );
}
