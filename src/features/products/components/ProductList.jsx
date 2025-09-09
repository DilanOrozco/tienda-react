import "./ProductCard.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
