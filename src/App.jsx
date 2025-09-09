import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./features/shared/layouts/MainLayout";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import ProductsPage from "./features/products/pages/ProductsPage";
import { CartPage } from "./features/cart/pages/CartPage";
import { mockVinyls } from "./features/products/data/mockVinyls";

function App() {
  // Estado global (lifting state up)
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(mockVinyls); // luego será API

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((_, index) => index !== id));
  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <Routes>
      <Route path="/" element={<MainLayout cart={cart} />}>
        <Route index element={<DashboardPage />} />
        <Route
          path="products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
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
