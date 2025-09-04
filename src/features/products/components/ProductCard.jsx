import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../cart/context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="productCard">
            <div className="img-card">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
            </div>
            <button className="btn-agg-carrito" onClick={() => addToCart(product)}>
                <FontAwesomeIcon icon={faCartPlus} /> Agregar al carrito
            </button>
        </div>
    );
};

export default ProductCard;
