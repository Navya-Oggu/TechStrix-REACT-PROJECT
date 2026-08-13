import ThemeToggle from "./ThemeToggle";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import ShopNowButton from "./ShopNowButton";

export default function NavActions({
  darkMode,
  setDarkMode,
  wishlistCount,
  cartCount,
  cartTotal,
  onOpenCart,
}) {
  return (
    <div className="nav-actions">
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <WishlistButton wishlistCount={wishlistCount} />
      <CartButton
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={onOpenCart}
      />
      <ShopNowButton />
    </div>
  );
}
