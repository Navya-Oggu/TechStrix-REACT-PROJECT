import './SignUp.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp({ showToast }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) {
      showToast("Name is required");
      return;
    }

    if (!email) {
      showToast("Email is required");
      return;
    }

    if (!password) {
      showToast("Password is required");
      return;
    }

    if (password.length < 6) {
      showToast("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    showToast("Sign Up form is valid!");
  }

  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p className="signup-subtitle">
      Create your TechStrix account
    </p>

        <form onSubmit={handleSubmit}>

          <div className='signup-field'>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='signup-field'>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='signup-field'>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='signup-field'>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className='signup-button'>
            Create Account
          </button>

        </form>
        <p className="auth-switch">
  Already have an account?{" "}
  <Link to="/signin">Sign In</Link>
</p>

      </div>

    </div>
  );
}

    