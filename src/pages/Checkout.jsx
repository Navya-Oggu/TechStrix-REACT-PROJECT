import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cartItems, cartTotal, showToast ,setCartItems}) {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [error, setError] = useState("");

  function handleChange(e) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });

  setError("");
}

  
async function handleSubmit(e) {
  e.preventDefault();
  console.log("🔥 HANDLE SUBMIT STARTED");

  if (cartItems.length === 0) {
     console.log("❌ CART IS EMPTY");
    showToast("Your cart is empty!");
    return;
  }

    console.log("✅ CART HAS ITEMS");

  const {
    name,
    phone,
    email,
    address,
    city,
    state,
    pincode
  } = formData;
  console.log("📦 FORM DATA:", formData);

  if (
    !name ||
    !phone ||
    !email ||
    !address ||
    !city ||
    !state ||
    !pincode
  ) {
    console.log("❌ VALIDATION FAILED");
    setError("Please fill in all delivery details.");
    return;
  }
   console.log("✅ VALIDATION PASSED");

  if (phone.length !== 10) {
    console.log("❌ PHONE INVALID");
    setError("Please enter a valid 10-digit phone number.");
    return;
  }

  if (pincode.length !== 6) {
    console.log("❌ PINCODE INVALID");
    setError("Please enter a valid 6-digit pincode.");
    return;
  }

   console.log("✅ PHONE AND PINCODE VALID");

  const orderData = {
    name: name,
    phone: phone,
    email: email,
    address: address,
    city: city,
    state: state,
    pincode: pincode,
    paymentMethod: paymentMethod,
    totalAmount: cartTotal,
    items: cartItems.map((item) => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
    }))
  };
  console.log("🚀 SENDING ORDER:", orderData);
  console.log("========== ORDER REQUEST ==========");
console.log("Sending to:", "http://localhost:8080/api/orders");


  console.log("Sending order:", orderData);

  try {
    const response = await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
     console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to place order");
    }

    const savedOrder = await response.json();
    setCartItems([]);


    console.log("Order saved:", savedOrder);

    showToast("Order placed successfully! 🎉");
    navigate("/order-success", {
  state: {
    orderId: savedOrder.id,
    totalAmount: savedOrder.totalAmount
  }
});

  } catch (error) {
    console.error("Order error:", error);
    setError("Unable to place order. Please try again.");
  }
}

  return (
    <section className="checkout-page">

      <div className="checkout-container">

        {/* LEFT SIDE - DELIVERY DETAILS */}
        <div className="checkout-form-section">

          <h1>Checkout</h1>
          <p className="checkout-subtitle">
            Enter your delivery details
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House no, street, area"
                rows="4"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  required
                />
              </div>

            </div>

            {/* PAYMENT */}
            <div className="payment-section">

              <h2>Payment Method</h2>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
              </label>

            </div>

            <button type="submit" className="place-order-btn" >
              Place Order
            </button>
            {error && (
  <p className="checkout-error">
    {error}
  </p>
)}

          </form>

        </div>


        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="checkout-items">

            {cartItems.map((item) => (

              <div className="checkout-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="checkout-item-info">

                  <h4>{item.name}</h4>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <strong>
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </strong>

                </div>

              </div>

            ))}

          </div>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>
              ₹{cartTotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="summary-line">
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>
              ₹{cartTotal.toLocaleString("en-IN")}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}