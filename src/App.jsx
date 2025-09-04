import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './features/shared/layouts/MainLayout';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';
import  ProductsPage  from './features/products/pages/ProductsPage'; // 👈 importa tu página
import { CartPage } from "./features/cart/pages/CartPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Ruta por defecto */}
        <Route index element={<DashboardPage />} />
        
        {/* Nueva ruta para productos */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
