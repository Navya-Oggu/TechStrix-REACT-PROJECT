import ProductsLink from "./ProductsLink";
import AuthLink from "./AuthLink";
import MyOrdersLink from "./MyOrdersLink";

export default function NavLinks({ loggedInUser, handleLogout }) {
  return (
    <ul className="nav-links">
      <ProductsLink />
      <AuthLink loggedInUser={loggedInUser} handleLogout={handleLogout} />
      <MyOrdersLink />
    </ul>
  );
}
