import { BookOpen, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    if (email === "admin@librax.com") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <BookOpen size={25} />
        </div>

        <h1>Welcome back</h1>
        <p>Sign in to continue to LibraX.</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={submit}>
          <label>Email</label>

          <div className="input-icon">
            <Mail size={18} />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>

          <div className="input-icon">
            <Lock size={18} />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="primary-btn full" type="submit">
            Sign In
          </button>
        </form>

        <div className="demo-login">
          <strong>Demo Accounts</strong>
          <p>User: student@librax.com / student123</p>
          <p>Admin: admin@librax.com / admin123</p>
        </div>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Create account</Link>
        </p>
      </div>
    </main>
  );
}