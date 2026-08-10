import ProductCard from "./ProductCard";
import "./App.css";
import products from "./data";
import { useState, useEffect } from "react";

function App() {
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
              <a href="#products" className="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Support
              </a>
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

            <button className="nav-btn primary">Shop Now</button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ──────────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2025</p>
          <h1 className="hero-title">
            Your World Of Tech
            <br />
            <span className="hero-highlight">One Click Away.</span>
          </h1>
          <p className="hero-description">
            Explore the world of modern technology, all in one place. From
            powerful laptops and smart devices to the latest smartphones,
            discover products that fit the way you live, work, and create.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Products
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </section>

      {/* ── Products Section ──────────────────────────── */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="filter-bar">
          <div className="filter-group">
            <label className="filter-label" htmlFor="brand-filter">Brand</label>
            <select
              className="filter-select"
              id="brand-filter"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label" htmlFor="sort-select">Sort By</label>
            <select
              className="filter-select"
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <span className="results-count">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((data) => (
              <ProductCard
                key={data.id}
                id={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                originalPrice={data.originalPrice}
                discount={data.discount}
                rating={data.rating}
                isBestSeller={data.isBestSeller}
                isWishlisted={wishlist.includes(data.id)}
                onAddToCart={() => addToCart(data)}
                onToggleWishlist={() => toggleWishlist(data.id)}
              />
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                className="btn-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBrand("All");
                  setSortBy("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

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
                  showToast("Proceeding to checkout!");
                  setIsCartOpen(false);
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
