import { createContext, useContext, useState } from "react";
import initialBooks from "../data/books";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("librax_books");
    return saved ? JSON.parse(saved) : initialBooks;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("librax_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [library, setLibrary] = useState(() => {
    const saved = localStorage.getItem("librax_library");
    return saved ? JSON.parse(saved) : [];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("librax_progress");
    return saved ? JSON.parse(saved) : {};
  });

  const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(updated);
    save("librax_favorites", updated);
  };

  const addToLibrary = (id) => {
    if (!library.includes(id)) {
      const updated = [...library, id];
      setLibrary(updated);
      save("librax_library", updated);
    }
  };

  const removeFromLibrary = (id) => {
    const updated = library.filter((item) => item !== id);
    setLibrary(updated);
    save("librax_library", updated);
  };

  const updateProgress = (id, page) => {
    const updated = {
      ...progress,
      [id]: page,
    };

    setProgress(updated);
    save("librax_progress", updated);
  };

  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now(),
      reads: 0,
      rating: Number(book.rating) || 4.5,
      pages: Number(book.pages) || 100,
      content: book.content || [
        "This is sample content for the selected book.",
        "You can replace this content with real educational material.",
        "The LibraX reader allows students to continue reading from their previous page.",
      ],
    };

    const updated = [...books, newBook];

    setBooks(updated);
    save("librax_books", updated);
  };

  const updateBook = (id, updatedBook) => {
    const updated = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );

    setBooks(updated);
    save("librax_books", updated);
  };

  const deleteBook = (id) => {
    const updated = books.filter((book) => book.id !== id);

    setBooks(updated);
    save("librax_books", updated);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        favorites,
        library,
        progress,
        toggleFavorite,
        addToLibrary,
        removeFromLibrary,
        updateProgress,
        addBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}
