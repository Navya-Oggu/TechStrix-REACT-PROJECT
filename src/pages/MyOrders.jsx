import { useEffect, useState } from "react";

export default function MyOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const savedUser = localStorage.getItem("techStrix-user");

    if (!savedUser) {
      console.log("No user logged in");
      setLoading(false);
      return;
    }

    const user = JSON.parse(savedUser);

    console.log("Logged-in user:", user);
    console.log("User email:", user.email);

    fetch(
      `http://localhost:8080/api/orders?email=${encodeURIComponent(user.email)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        return response.json();
      })
      .then((data) => {
        console.log("User orders:", data);
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Loading orders...</h2>;
  }

  return (
    <section className="my-orders-page">

      <div className="my-orders-container">

        <h1>My Orders</h1>

        {orders.length === 0 ? (

          <div className="no-orders">
            <h2>No orders found</h2>
            <p>You haven't placed any orders yet.</p>
          </div>

        ) : (

          <div className="orders-list">

            {orders.map((order) => (

              <div className="order-card" key={order.id}>

                {/* ORDER HEADER */}
                <div className="order-header">

                  <h3>Order #{order.id}</h3>

                  <span>
                    {order.paymentMethod}
                  </span>

                </div>

                {/* CUSTOMER DETAILS */}
                <div className="order-details">

                  <p>
                    <strong>Name:</strong>{" "}
                    {order.customerName}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {order.email}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {order.phone}
                  </p>

                  <p>
                    <strong>Address:</strong>{" "}
                    {order.address}, {order.city},{" "}
                    {order.state} - {order.pincode}
                  </p>

                </div>

                {/* ORDERED PRODUCTS */}
                <div className="ordered-items">

                  <h3>Ordered Items</h3>

                  {order.items && order.items.length > 0 ? (

                    order.items.map((item) => (

                      <div
                        className="ordered-item"
                        key={item.id}
                      >

                        <div className="ordered-item-info">

                          <h4>{item.productName}</h4>

                          <p>
                            Quantity: {item.quantity}
                          </p>

                          <p>
                            Price: ₹
                            {item.price.toLocaleString("en-IN")}
                          </p>

                        </div>

                        <strong>
                          ₹
                          {(item.price * item.quantity)
                            .toLocaleString("en-IN")}
                        </strong>

                      </div>

                    ))

                  ) : (

                    <p>No item details available.</p>

                  )}

                </div>

                {/* TOTAL */}
                <div className="order-total">

                  <strong>Total Amount:</strong>

                  <span>
                    ₹{order.totalAmount.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}