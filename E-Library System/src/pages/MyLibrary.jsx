import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function MyLibrary() {
  const { books, library, progress, removeFromLibrary } = useBooks();

  const savedBooks = books.filter((book) => library.includes(book.id));

  return (
    <main className="page">
      <div className="page-header">
        <span className="section-label">PERSONAL SPACE</span>
        <h1>My Library</h1>
        <p>Continue reading your saved books.</p>
      </div>

      {savedBooks.length === 0 ? (
        <div className="empty-state">
          <BookOpen size={50} />
          <h2>Your library is empty</h2>
          <p>Add books to create your personal collection.</p>

          <Link to="/explore" className="primary-btn">
            Explore Books
          </Link>
        </div>
      ) : (
        <div className="library-list">
          {savedBooks.map((book) => {
            const currentPage = progress[book.id] || 1;
            const total = Math.max(book.content.length, 4);
            const percent = Math.round((currentPage / total) * 100);

            return (
              <div className="library-item" key={book.id}>
                <img src={book.cover} alt={book.title} />

                <div className="library-info">
                  <span>{book.category}</span>
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>

                  <div className="library-progress">
                    <div>
                      <span>Reading progress</span>
                      <strong>{percent}%</strong>
                    </div>

                    <div className="progress-bar">
                      <div style={{ width: `${percent}%` }} />
                    </div>
                  </div>

                  <div className="library-actions">
                    <Link
                      to={`/reader/${book.id}`}
                      className="primary-btn"
                    >
                      Continue Reading
                    </Link>

                    <button
                      className="secondary-btn"
                      onClick={() => removeFromLibrary(book.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}