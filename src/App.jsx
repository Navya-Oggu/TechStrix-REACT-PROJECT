import ProductCard from "./ProductCard";
import "./App.css";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import OrderSuccess from "./pages/OrderSuccess";
import productData from "./data";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import { useState, useEffect } from "react";
import Signin  from "./pages/Signin";
import SignUp from "./pages/SignUp";
console.log("Total products:", productData.length);

function App() {
  function handleLogout() {
  localStorage.removeItem("techStrix-user");
  setLoggedInUser(null);
  showToast("Logged out successfully!");
}
async function uploadProducts() {

  const productsForBackend = productData.map(product => ({
    name: product.name,
    price: product.price,
    rating: product.rating,
    discount: product.discount,
    brand: product.brand,
    image: product.image,
    isBestSeller: product.isBestSeller
  }));

  console.log("Total products:", productData.length);
  console.log("Sending:", productsForBackend.length);
  console.log("First product:", productsForBackend[0]);

  const response = await fetch(
    "http://localhost:8080/api/products/bulk",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productsForBackend)
    }
  );

  const data = await response.json();

  console.log("Saved:", data);
}
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetch("http://localhost:8080/api/products")
    .then((response) => response.json())
    .then((data) => {
      console.log("BACKEND PRODUCTS:", data);
      console.log("BACKEND COUNT:", data.length);
      setProducts(data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);

  // ── State ──────────────────────────────────────────────
  const [cartItems, setCartItems] = useState(()=>{
    const savedCart=localStorage.getItem("techStrix-cart")
    if(savedCart){
      try {
        return JSON.parse(savedCart)
      } catch (error) {
        console.error("Problem!!!!",error);
        return []
        
      }
    }
      return []
    
  });

  useEffect(()=>{
    localStorage.setItem("techStrix-cart",JSON.stringify(cartItems))
  },[cartItems])
  const [wishlist, setWishlist] = useState(()=>{
    const savedWishList=localStorage.getItem("techStrix-wishList")
    if(savedWishList){
      try {
        return JSON.parse(savedWishList)
      } catch (error) {
        console.error("Prolem!!!",error)
        return []
        
      }
    }
    return []
  });
  useEffect(()=>{
    localStorage.setItem("techStrix-wishList",JSON.stringify(wishlist))
  },[wishlist])
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [toast, setToast] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("techstrix-theme");
    return saved === "dark";
  });

  // ── Persist theme preference ───────────────────────────
  useEffect(() => {
    localStorage.setItem("techstrix-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // ── Derived values (AFTER state declarations) ──────────
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [loggedInUser, setLoggedInUser] = useState(() => {
  const savedUser = localStorage.getItem("techStrix-user");

  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch (error) {
      return null;
    }
  }

  return null;
});

  const allBrands = [...new Set(products.map((p) => p.brand))];

  // ── Toast helper ───────────────────────────────────────
  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  }

  // ── Cart ───────────────────────────────────────────────
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      showToast(`${product.name} quantity updated!`);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      showToast(`${product.name} added to cart!`);
    }
  }

  // ── Wishlist ───────────────────────────────────────────
  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      setWishlist(wishlist.filter((id) => id !== productID));
      showToast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, productID]);
      showToast("Added to wishlist ❤");
    }
  }

  // ── Cart Quantity Update ──────────────────────────────
  function updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      const item = cartItems.find((p) => p.id === productId);
      setCartItems(cartItems.filter((item) => item.id !== productId));
      if (item) {
        showToast(`${item.name} removed from cart`);
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQty } : item
        )
      );
    }
  }

  // ── Filtering ──────────────────────────────────────────
  let filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term);
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  // ── Sorting ────────────────────────────────────────────
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <BrowserRouter>
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {/* ── Toast Notification ────────────────────────── */}
      {toast && (
        <div className="toast" key={toast}>
          <span className="toast-icon">✓</span>
          {toast}
        </div>
      )}

      {/* ── Navigation ────────────────────────────────── */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon"></span>
            ⚡TechStrix
          </a>
        

          {/* Search Bar */}
          <div className="nav-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products, brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="nav-search-input"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/products" className="nav-link">
                  Products
              </Link>
            </li>
            
           
            <li>
               {loggedInUser ? (
    <div className="user-menu">
      <span className="welcome-user">
        Hi, {loggedInUser.name} 👋
      </span>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  ) : (
    <Link to="/Signin" className="nav-link">
      Sign In
    </Link>
  )}
            </li>
            <li>
  <Link to="/my-orders" className="nav-link">
    My Orders
  </Link>
</li>
          </ul>

          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              id="theme-toggle-btn"
            >
              <span className={`toggle-icon ${darkMode ? "moon" : "sun"}`}>
                {darkMode ? "🌙" : "☀️"}
              </span>
            </button>
            {/* Wishlist Badge */}
            <button className="nav-icon-btn" id="wishlist-btn" aria-label="Wishlist">
              <span className="nav-icon">♥</span>
              {wishlist.length > 0 && (
                <span className="badge wishlist-badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Badge + Total */}
            <button
              className="nav-icon-btn"
              id="cart-btn"
              aria-label="Cart"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="nav-icon">🛒</span>
              {cartCount > 0 && (
                <span className="badge cart-badge">{cartCount}</span>
              )}
            </button>

            {cartTotal > 0 && (
              <span className="cart-total" id="cart-total" onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            )}

            <Link to="/products" className="nav-btn primary">
  Shop Now
</Link>
          </div>
        </div>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

         <Route
            path="/products"
            element={
              <Products
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filteredProducts={filteredProducts}
                allBrands={allBrands}
                wishlist={wishlist}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
              />
            }
          />
          <Route path="/Signin" element={<Signin showToast={showToast}/>} />
          <Route path="/signup" element={<SignUp showToast={showToast} />}/>
          <Route path="/checkout"element={<Checkout
                            cartItems={cartItems}
                            cartTotal={cartTotal}
                            showToast={showToast}
                            setCartItems={setCartItems} />}/>
          <Route
  path="/order-success"
  element={<OrderSuccess />}
/>
<Route
  path="/my-orders"
  element={<MyOrders />}
/>


      </Routes>

     

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="footer">
        <p>&copy; 2025 TechStrix. All rights reserved.</p>
      </footer>

      {/* ── Cart Sidebar Drawer ────────────────────────── */}
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`} id="cart-drawer">
        <div
          className="cart-drawer-backdrop"
          onClick={() => setIsCartOpen(false)}
        ></div>
        <div className="cart-drawer-content">
          <div className="cart-drawer-header">
            <h2>Shopping Cart ({cartCount})</h2>
            <button
              className="close-drawer-btn"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          <div className="cart-drawer-body">
            {cartItems.length > 0 ? (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button
                          className="cart-item-remove-btn"
                          onClick={() => updateQuantity(item.id, 0)}
                          aria-label="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cart-drawer-empty">
                <span className="empty-cart-icon">🛒</span>
                <p>Your cart is empty</p>
                <button
                  className="btn-primary"
                  onClick={() => setIsCartOpen(false)}
                >
                  Shop Now
                </button>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-drawer-footer">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span className="cart-summary-total">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => {
                  setIsCartOpen(false);
                  window.location.href = "/checkout";
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
