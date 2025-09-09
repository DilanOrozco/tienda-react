import "./CartPage.css";

export const CartPage = ({ cart, removeFromCart, getTotal }) => {
    return (
        <div className="cart-page">
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <span>
                                {item.title} - ${item.price}
                            </span>
                            <button onClick={() => removeFromCart(index)}>Quitar</button>
                        </div>
                    ))}
                    <h3>Total: ${getTotal()}</h3>
                </>
            )}
        </div>
    );
};
