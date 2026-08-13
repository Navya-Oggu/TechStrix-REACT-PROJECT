import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar({
  searchTerm,
  setSearchTerm,
  loggedInUser,
  handleLogout,
  darkMode,
  setDarkMode,
  wishlistCount,
  cartCount,
  cartTotal,
  onOpenCart,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <NavLinks loggedInUser={loggedInUser} handleLogout={handleLogout} />

        <NavActions
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          wishlistCount={wishlistCount}
          cartCount={cartCount}
          cartTotal={cartTotal}
          onOpenCart={onOpenCart}
        />
      </div>
    </nav>
  );
}
