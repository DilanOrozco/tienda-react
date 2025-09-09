import "./ProductsPage.css";
import ProductList from "../components/ProductList";

const ProductsPage = ({ products, addToCart }) => {
    return (
        <div className="products-page">
            <h2>Productos</h2>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default ProductsPage;
