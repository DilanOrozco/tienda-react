// src/features/cart/pages/CartPage.jsx
import { useCart } from "../context/CartContext";

export const CartPage = () => {
    const { cart, removeFromCart, getTotal } = useCart();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Carrito de compras</h1>

            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} style={{ marginBottom: "1rem" }}>
                                <img src={item.image} alt={item.title} width={60} />
                                <strong>{item.title}</strong> - ${item.price}
                                <button onClick={() => removeFromCart(index)}>❌</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${getTotal()}</h2>
                </div>
            )}
        </div>
    );
};
