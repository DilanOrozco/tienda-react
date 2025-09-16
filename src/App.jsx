import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./features/shared/layouts/MainLayout";
import { HomePage } from "./features/HomePage/pages/HomePage";
import ProductsPage from "./features/products/pages/ProductsPage";
import { CartPage } from "./features/cart/pages/CartPage";
import { ContactPage } from "./features/contact/pages/ContactPage";
function App() {
  // Estado global
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 👈 nuevo estado

  // Llamada a la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al obtener vinilos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Funciones carrito
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((_, index) => index !== id));
  const getTotal = () =>
    cart.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);

  return (
    <Routes>
      <Route path="/" element={<MainLayout cart={cart} />}>
        <Route index element={<HomePage />} />
        
        <Route
          path="products"
          element={
            loading ? (
              <p style={{ textAlign: "center" }}>⏳ Cargando vinilos...</p>
            ) : error ? (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : (
              <ProductsPage products={products} addToCart={addToCart} />
            )
          }
        />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              getTotal={getTotal}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
