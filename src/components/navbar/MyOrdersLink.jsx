import { Link } from "react-router-dom";

export default function MyOrdersLink() {
  return (
    <li>
      <Link to="/my-orders" className="nav-link">
        My Orders
      </Link>
    </li>
  );
}
