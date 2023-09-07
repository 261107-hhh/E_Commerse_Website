import Footer from "../partial/footer";
import Navbar from "../partial/navbar";
import '../Style/Cart.css'
const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 1,
        },
    ];

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }
    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">Total:</td>
                                    <td>${calculateTotal()}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className="checkout-button">Checkout</button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Cart;