import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css"

export default function Signin({showToast}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(event) {
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

  showToast("Registration Successful");

    console.log("Email:", email);
    console.log("Password:", password);
}
     return (
    <div className="signin-page">
        <div className="signin-card">

      <h1>SignIn</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Email</label>
          <input type="email" value={email}
           onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button type="submit">
          Sign In
        </button>

      </form>
      <p className="auth-switch">
  Don't have an account?{" "}
  <Link to="/signup">Sign Up</Link>
</p>
    </div>
    </div>
  );
}
