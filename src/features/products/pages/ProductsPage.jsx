// src/features/products/pages/ProductsPage.jsx
import { useState } from "react";
import { mockVinyls } from "../data/mockVinyls";
import ProductList from "../components/ProductList";
import './ProductsPage'
const ProductsPage = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (vinyl) => {
        setCart([...cart, vinyl]);
        console.log("Carrito actualizado:", [...cart, vinyl]);
    };

    return (
        <div className='page'>
            <h1 className='title'>Catálogo de Vinilos</h1>
            <div className='grid'>
                <ProductList products={mockVinyls} onAddToCart={(vinyl) => console.log("Agregado:", vinyl)} />
            </div>
        </div>
    );
};

export default ProductsPage;
