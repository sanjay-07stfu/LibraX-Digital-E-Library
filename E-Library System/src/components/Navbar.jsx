import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Menu,
  Moon,
  Sun,
  X,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("librax_theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("librax_theme", newTheme ? "dark" : "light");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">
          <BookOpen size={22} />
        </span>
        LibraX
      </Link>

      <nav className={`nav-links ${menu ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenu(false)}>
          Home
        </Link>

        <Link to="/explore" onClick={() => setMenu(false)}>
          Explore
        </Link>

        <Link to="/categories" onClick={() => setMenu(false)}>
          Categories
        </Link>

        {user && (
          <Link to="/my-library" onClick={() => setMenu(false)}>
            My Library
          </Link>
        )}

        {user?.role === "admin" && (
          <Link to="/admin" onClick={() => setMenu(false)}>
            Admin
          </Link>
        )}
      </nav>

      <div className="nav-actions">
        <Link to="/favorites" className="icon-btn" title="Favorites">
          <Heart size={20} />
        </Link>

        <button className="icon-btn" onClick={toggleTheme}>
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {user ? (
          <div className="user-menu">
            <button className="profile-btn">
              <User size={17} />
              {user.name}
            </button>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={16} />
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}

        <button className="mobile-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}