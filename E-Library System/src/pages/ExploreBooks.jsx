import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";

const ExploreBooks = () => {
  const { books = [] } = useBooks();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(books.map((book) => book.category).filter(Boolean)),
  ];

  const filteredBooks = useMemo(() => {
    let result = [...books];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (book) =>
          book.title?.toLowerCase().includes(query) ||
          book.author?.toLowerCase().includes(query) ||
          book.category?.toLowerCase().includes(query)
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter((book) => book.category === category);
    }

    // Sorting
    if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "author") {
      result.sort((a, b) => a.author.localeCompare(b.author));
    }

    return result;
  }, [books, search, category, sortBy]);

  return (
    <div className="explore-page">

      {/* Header */}
      <section className="explore-header">
        <div className="explore-header-content">
          <div>
            <span className="explore-label">LIBRAX LIBRARY</span>

            <h1>Explore Books</h1>

            <p>
              Discover your next favorite book from our growing digital
              collection.
            </p>
          </div>

          <div className="explore-header-icon">
            <BookOpen size={70} strokeWidth={1.3} />
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="explore-controls">

        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search by title, author or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="filter-box">
          <SlidersHorizontal size={19} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-box">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="title">Sort: Title</option>
            <option value="author">Sort: Author</option>
          </select>
        </div>

      </section>

      {/* Results */}
      <section className="books-section">

        <div className="books-section-header">
          <div>
            <h2>Book Collection</h2>
            <p>
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1 ? "book" : "books"} found
            </p>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="empty-books">
            <BookOpen size={55} />

            <h3>No books found</h3>

            <p>
              Try changing your search or selecting another category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSortBy("default");
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <div className="book-card" key={book.id}>

                <div className="book-cover">
                  {book.coverImage || book.image ? (
                    <img
                      src={book.coverImage || book.image}
                      alt={book.title}
                    />
                  ) : (
                    <div className="book-placeholder">
                      <BookOpen size={45} />
                    </div>
                  )}
                </div>

                <div className="book-info">

                  <span className="book-category">
                    {book.category || "General"}
                  </span>

                  <h3>{book.title}</h3>

                  <p className="book-author">
                    {book.author || "Unknown Author"}
                  </p>

                  {book.description && (
                    <p className="book-description">
                      {book.description.length > 90
                        ? `${book.description.substring(0, 90)}...`
                        : book.description}
                    </p>
                  )}

                  <Link
                    to={`/books/${book.id}`}
                    className="view-book-btn"
                  >
                    View Book
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
};

export default ExploreBooks;