import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import BookCard from "../components/BookCard";

export default function Favorites() {
  const { books, favorites } = useBooks();

  const favoriteBooks = books.filter((book) =>
    favorites.includes(book.id)
  );

  return (
    <main className="page">
      <div className="page-header">
        <span className="section-label">YOUR COLLECTION</span>
        <h1>Favorite Books</h1>
        <p>Books you have saved for later.</p>
      </div>

      {favoriteBooks.length > 0 ? (
        <div className="book-grid">
          {favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={50} />
          <h2>No favorite books yet</h2>
          <p>Click the heart icon on a book to save it here.</p>

          <Link to="/explore" className="primary-btn">
            Explore Books
          </Link>
        </div>
      )}
    </main>
  );
}