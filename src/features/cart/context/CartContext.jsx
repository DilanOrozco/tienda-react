// src/features/cart/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Añadir producto
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    // Quitar producto
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item, index) => index !== id));
    };

    // Calcular total
    const getTotal = () => {
        return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
