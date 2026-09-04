import { Heart, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function BookCard({ book }) {
  const { favorites, toggleFavorite } = useBooks();

  const favorite = favorites.includes(book.id);

  return (
    <div className="book-card">
      <div className="book-cover-wrapper">
        <img
          src={book.cover}
          alt={book.title}
          className="book-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x440?text=No+Cover";
          }}
        />

        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={() => toggleFavorite(book.id)}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="book-info">
        <span className="book-category">{book.category}</span>

        <h3>{book.title}</h3>

        <p className="author">{book.author}</p>

        <div className="book-meta">
          <span>
            <Star size={15} fill="currentColor" />
            {book.rating}
          </span>

          <span>{book.pages} pages</span>
        </div>

        <Link to={`/book/${book.id}`} className="read-btn">
          <BookOpen size={17} />
          View Book
        </Link>
      </div>
    </div>
  );
}