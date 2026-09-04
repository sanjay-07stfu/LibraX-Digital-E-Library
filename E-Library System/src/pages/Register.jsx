import { BookOpen, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    register(form.name, form.email, form.password);
    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <BookOpen size={25} />
        </div>

        <h1>Create account</h1>
        <p>Join thousands of readers on LibraX.</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={submit}>
          <label>Full Name</label>

          <div className="input-icon">
            <User size={18} />
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={update}
              required
            />
          </div>

          <label>Email</label>

          <div className="input-icon">
            <Mail size={18} />
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update}
              required
            />
          </div>

          <label>Password</label>

          <div className="input-icon">
            <Lock size={18} />
            <input
              name="password"
              type="password"
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={update}
              required
            />
          </div>

          <label>Confirm Password</label>

          <div className="input-icon">
            <Lock size={18} />
            <input
              name="confirm"
              type="password"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={update}
              required
            />
          </div>

          <button className="primary-btn full" type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  );
}