import React, { useState } from "react";
// optional external CSS for styling

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    } else {
      alert("Please enter email and password");
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="login-card">
        {!isLoggedIn ? (
          <>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </>
        ) : (
          <>
            <h2>Welcome back!</h2>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )}
      </div>
    </div>
  );
}
