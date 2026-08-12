import './SignUp.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp({ showToast }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 async function handleSubmit(event) {
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

    
  try {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      showToast("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      showToast("Unable to create account");
    }

  } catch (error) {
    console.error(error);
    showToast("Backend server is not running");
  }

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


    