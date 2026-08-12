import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {

  const location = useLocation();

  const orderId = location.state?.orderId;
  const totalAmount = location.state?.totalAmount;
  const items = location.state?.items || [];

  return (
    <section className="order-success-page">

      <div className="order-success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully! 🎉</h1>

        <p className="success-message">
          Thank you for shopping with TechStrix.
          Your order has been successfully placed.
        </p>

        {orderId && (
          <div className="order-info">

            <p>
              <strong>Order ID:</strong> #{orderId}
            </p>

            <p>
              <strong>Total Amount:</strong>{" "}
              ₹{Number(totalAmount).toLocaleString("en-IN")}
            </p>

          </div>
        )}

        {/* ORDERED ITEMS */}
        {items.length > 0 && (
          <div className="success-items">

            <h2>Ordered Items</h2>

            {items.map((item) => (

              <div className="success-item" key={item.id}>

                <div>
                  <h4>{item.productName}</h4>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Price: ₹
                    {Number(item.price).toLocaleString("en-IN")}
                  </p>
                </div>

                <strong>
                  ₹
                  {(item.price * item.quantity)
                    .toLocaleString("en-IN")}
                </strong>

              </div>

            ))}

          </div>
        )}

        <div className="success-actions">

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>

          <Link
            to="/my-orders"
            className="view-orders-btn"
          >
            View My Orders
          </Link>

        </div>

      </div>

    </section>
  );
}