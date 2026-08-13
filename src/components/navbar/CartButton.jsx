export default function CartButton({ cartCount, cartTotal, onOpenCart }) {
  return (
    <>
      <button
        className="nav-icon-btn"
        id="cart-btn"
        aria-label="Cart"
        onClick={onOpenCart}
      >
        <span className="nav-icon">🛒</span>
        {cartCount > 0 && (
          <span className="badge cart-badge">{cartCount}</span>
        )}
      </button>

      {cartTotal > 0 && (
        <span
          className="cart-total"
          id="cart-total"
          onClick={onOpenCart}
          style={{ cursor: "pointer" }}
        >
          ₹{cartTotal.toLocaleString("en-IN")}
        </span>
      )}
    </>
  );
}
