import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin({ showToast }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

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

    try {

      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {

        const user = await response.json();

        console.log("Logged in user:", user);

        // Save logged-in user
        localStorage.setItem(
          "techStrix-user",
          JSON.stringify(user)
        );

        showToast("Login successful! 🎉");

        setEmail("");
        setPassword("");

        // Go to home page
        navigate("/");

      } else {

        showToast("Invalid email or password");

      }

    } catch (error) {

      console.error("Login error:", error);

      showToast("Backend server is not running");

    }
  }

  return (
    <div className="signin-page">

      <div className="signin-card">

        <h1>SignIn</h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}