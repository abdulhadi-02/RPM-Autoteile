import "./OrdersPage.css";

function OrdersPage() {
  const orders = [
    { id: 1, item: "Brake Pads", date: "2025-03-08", price: "120€" },
    { id: 2, item: "Oil Filter", date: "2025-03-06", price: "40€" },
    { id: 3, item: "Air Filter", date: "2025-03-05", price: "35€" },
  ];

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.date}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;