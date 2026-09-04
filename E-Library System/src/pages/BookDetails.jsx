import { ArrowLeft, BookOpen, Heart, Star } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import BookCard from "../components/BookCard";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    books,
    favorites,
    toggleFavorite,
    library,
    addToLibrary,
  } = useBooks();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <main className="empty-state page">
        <h2>Book not found</h2>
        <Link to="/explore" className="primary-btn">
          Explore Books
        </Link>
      </main>
    );
  }

  const favorite = favorites.includes(book.id);
  const inLibrary = library.includes(book.id);

  const related = books
    .filter(
      (item) =>
        item.category === book.category && item.id !== book.id
    )
    .slice(0, 4);

  return (
    <main className="page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={17} /> Back
      </button>

      <section className="details">
        <div className="details-cover">
          <img src={book.cover} alt={book.title} />
        </div>

        <div className="details-content">
          <span className="book-category">{book.category}</span>

          <h1>{book.title}</h1>

          <p className="details-author">
            By <strong>{book.author}</strong>
          </p>

          <div className="rating-large">
            <Star size={20} fill="currentColor" />
            {book.rating}
            <span>Excellent rating</span>
          </div>

          <p className="description">{book.description}</p>

          <div className="book-details-grid">
            <div>
              <span>Pages</span>
              <strong>{book.pages}</strong>
            </div>

            <div>
              <span>Language</span>
              <strong>{book.language}</strong>
            </div>

            <div>
              <span>Published</span>
              <strong>{book.year}</strong>
            </div>

            <div>
              <span>Publisher</span>
              <strong>{book.publisher}</strong>
            </div>

            <div>
              <span>ISBN</span>
              <strong>{book.isbn}</strong>
            </div>

            <div>
              <span>Reads</span>
              <strong>{book.reads.toLocaleString()}</strong>
            </div>
          </div>

          <div className="details-actions">
            <Link to={`/reader/${book.id}`} className="primary-btn">
              <BookOpen size={18} />
              Read Now
            </Link>

            <button
              className="secondary-btn"
              onClick={() => addToLibrary(book.id)}
              disabled={inLibrary}
            >
              {inLibrary ? "Added to Library" : "Add to Library"}
            </button>

            <button
              className={`heart-large ${favorite ? "active" : ""}`}
              onClick={() => toggleFavorite(book.id)}
            >
              <Heart
                size={20}
                fill={favorite ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>
      </section>

      <section className="description-section">
        <span className="section-label">ABOUT THIS BOOK</span>
        <h2>Overview</h2>
        <p>{book.description}</p>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <div>
              <span className="section-label">YOU MAY ALSO LIKE</span>
              <h2>Related Books</h2>
            </div>
          </div>

          <div className="book-grid">
            {related.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}