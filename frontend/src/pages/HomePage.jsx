import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import "./HomePage.css";

const placeholderImg = "https://via.placeholder.com/300x200";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products, using fallback:", error);
        setProducts([
          { _id: 1, name: "Wheel Hub Bearing", price: "450", image: placeholderImg },
          { _id: 2, name: "Car Wheel", price: "350", image: placeholderImg },
          { _id: 3, name: "Car Air Filter", price: "350", image: placeholderImg },
          { _id: 4, name: "Car Disk Brake", price: "350", image: placeholderImg },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading products...</p>;

  const dealProducts = products.slice(0, 4);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-text">
          <h2>15% OFF</h2>
          <h3>Oil Change Packages</h3>
          <p>Book your next appointment and get premium service.</p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-image" />
      </section>

      <section className="deal-section">
        <div className="deal-header">
          <h2>Deal Of The Day</h2>
          <button className="deal-showall">Show All</button>
        </div>
        <div className="products">
          {dealProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image || placeholderImg} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <button
                className="buy-btn"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;