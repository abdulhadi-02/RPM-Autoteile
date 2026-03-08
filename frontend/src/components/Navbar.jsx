import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { logout } from "../features/auth/authSlice";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">RPM AutoTeile</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        {user ? (
          <button type="button" className="login-btn" onClick={handleLogout}>
            <FaUserCircle size={22} />
            <span style={{ marginLeft: 4 }}>{user.name || "Logout"}</span>
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            <FaUserCircle size={22} /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;