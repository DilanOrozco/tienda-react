import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header({ cart }) {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img src="../../../../assets/logo-vinilos.png" alt="Logo Vinilos" />
        Mi Tienda Vinilos
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeLink} ${styles.cartLink}`
              : `${styles.link} ${styles.cartLink}`
          }
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
