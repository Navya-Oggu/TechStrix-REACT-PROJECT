export default function WishlistButton({ wishlistCount }) {
  return (
    <button className="nav-icon-btn" id="wishlist-btn" aria-label="Wishlist">
      <span className="nav-icon">♥</span>
      {wishlistCount > 0 && (
        <span className="badge wishlist-badge">{wishlistCount}</span>
      )}
    </button>
  );
}
