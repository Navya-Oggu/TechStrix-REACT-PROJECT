import { Link } from "react-router-dom";

export default function AuthLink({ loggedInUser, handleLogout }) {
  if (loggedInUser) {
    return (
      <li>
        <div className="user-menu">
          <span className="welcome-user">Hi, {loggedInUser.name} 👋</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link to="/Signin" className="nav-link">
        Sign In
      </Link>
    </li>
  );
}
