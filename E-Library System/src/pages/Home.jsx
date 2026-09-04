import { ArrowRight, BookOpen, Brain, Code, Database, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import BookCard from "../components/BookCard";

export default function Home() {
  const { books } = useBooks();

  const featured = books.slice(0, 4);

  const categories = [
    { name: "Programming", icon: <Code /> },
    { name: "Artificial Intelligence", icon: <Brain /> },
    { name: "Database", icon: <Database /> },
    { name: "Cyber Security", icon: <Shield /> },
    { name: "Web Development", icon: <BookOpen /> },
    { name: "Computer Networks", icon: <Users /> },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <BookOpen size={16} />
            DIGITAL KNOWLEDGE PLATFORM
          </span>

          <h1>
            Your knowledge.
            <br />
            <span>Anytime, anywhere.</span>
          </h1>

          <p>
            Discover thousands of books, explore new subjects,
            read online and build your own digital library.
          </p>

          <div className="hero-buttons">
            <Link to="/explore" className="primary-btn">
              Explore Books
              <ArrowRight size={18} />
            </Link>

            <Link to="/categories" className="secondary-btn">
              Browse Categories
            </Link>
          </div>
        </div>

        <div className="hero-books">
          <div className="floating-card card-one">
            <BookOpen size={24} />
            <span>10K+ Books</span>
          </div>

          <div className="book-stack">
            {books.slice(0, 3).map((book, index) => (
              <img
                key={book.id}
                src={book.cover}
                alt={book.title}
                style={{
                  transform: `rotate(${(index - 1) * 8}deg)`,
                }}
              />
            ))}
          </div>

          <div className="floating-card card-two">
            <span>⭐ 4.9</span>
            <small>Reader Rating</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">DISCOVER</span>
            <h2>Explore Categories</h2>
          </div>

          <Link to="/categories" className="view-link">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/explore?category=${encodeURIComponent(category.name)}`}
              className="category-card"
              key={category.name}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <span>Explore books →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-label">EDITOR'S CHOICE</span>
            <h2>Featured Books</h2>
          </div>

          <Link to="/explore" className="view-link">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="book-grid">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div>
          <strong>10K+</strong>
          <span>Digital Books</span>
        </div>

        <div>
          <strong>5K+</strong>
          <span>Active Readers</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Categories</span>
        </div>

        <div>
          <strong>1M+</strong>
          <span>Books Read</span>
        </div>
      </section>
    </>
  );
}