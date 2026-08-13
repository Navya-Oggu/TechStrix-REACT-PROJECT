import { Link } from "react-router-dom";

export default function ProductsLink() {
  return (
    <li>
      <Link to="/products" className="nav-link">
        Products
      </Link>
    </li>
  );
}
