import { Link } from "react-router-dom";

export default function ShopNowButton() {
  return (
    <Link to="/products" className="nav-btn primary">
      Shop Now
    </Link>
  );
}
