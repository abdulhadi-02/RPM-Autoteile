import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../features/cart/cartSlice";
import "./CartPage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleIncrease = (item) => dispatch(addToCart(item));

  if (cartItems.length === 0)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty</p>;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item._id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.price}€</p>
              <p>Qty: {item.qty}</p>
              <div className="cart-buttons">
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleRemove(item._id)}>- Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;