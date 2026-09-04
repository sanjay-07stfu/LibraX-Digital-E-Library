import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minus,
  Plus,
  Bookmark,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function Reader() {
  const { id } = useParams();

  const { books, progress, updateProgress } = useBooks();

  const book = books.find((item) => item.id === Number(id));

  const [page, setPage] = useState(progress[id] || 1);
  const [zoom, setZoom] = useState(100);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    updateProgress(Number(id), page);
  }, [page]);

  if (!book) {
    return <div className="empty-state">Book not found.</div>;
  }

  const totalPages = Math.max(book.content.length, 4);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const currentContent =
    book.content[(page - 1) % book.content.length];

  return (
    <main className="reader-page">
      <div className="reader-topbar">
        <Link to={`/book/${book.id}`} className="reader-back">
          <ArrowLeft size={18} />
          Back to Book
        </Link>

        <strong>{book.title}</strong>

        <div className="reader-tools">
          <button onClick={() => setZoom(Math.max(70, zoom - 10))}>
            <Minus size={17} />
          </button>

          <span>{zoom}%</span>

          <button onClick={() => setZoom(Math.min(150, zoom + 10))}>
            <Plus size={17} />
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={bookmarked ? "tool-active" : ""}
          >
            <Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} />
          </button>

          <button>
            <Maximize size={18} />
          </button>
        </div>
      </div>

      <div className="reader-container">
        <aside className="reader-sidebar">
          <img src={book.cover} alt={book.title} />

          <h3>{book.title}</h3>
          <p>{book.author}</p>

          <div className="reading-progress">
            <span>Reading progress</span>
            <strong>
              {Math.round((page / totalPages) * 100)}%
            </strong>

            <div className="progress-bar">
              <div
                style={{
                  width: `${(page / totalPages) * 100}%`,
                }}
              />
            </div>
          </div>
        </aside>

        <section className="reader-content">
          <div
            className="paper"
            style={{
              fontSize: `${zoom}%`,
            }}
          >
            <span className="page-number">
              Page {page} of {totalPages}
            </span>

            <h1>{book.title}</h1>

            <h2>Chapter {page}</h2>

            <p>{currentContent}</p>

            <p>
              Digital libraries provide students with convenient access
              to educational resources. Modern e-library systems make it
              easier to discover, organize and read books from anywhere.
            </p>

            <p>
              Continue exploring the LibraX collection to find more
              books related to your interests and academic subjects.
            </p>
          </div>

          <div className="reader-navigation">
            <button
              className="secondary-btn"
              disabled={page === 1}
              onClick={previousPage}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <span>
              {page} / {totalPages}
            </span>

            <button
              className="primary-btn"
              disabled={page === totalPages}
              onClick={nextPage}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}