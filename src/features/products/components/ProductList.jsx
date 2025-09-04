// src/features/products/components/ProductList.jsx
import ProductCard from "./ProductCard"

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="list">
            {products.map((vinyl) => (
                <ProductCard 
                    key={vinyl.id} 
                    product={vinyl} 
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )
}

export default ProductList
