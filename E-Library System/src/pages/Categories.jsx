import {
  Brain,
  Code,
  Database,
  Globe,
  Network,
  Shield,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function Categories() {
  const { books } = useBooks();

  const categoryIcons = {
    Programming: <Code />,
    Python: <Code />,
    React: <Code />,
    "Artificial Intelligence": <Brain />,
    "Machine Learning": <Brain />,
    "Data Science": <BarChart3 />,
    Database: <Database />,
    "Computer Networks": <Network />,
    "Operating Systems": <Globe />,
    "Web Development": <Globe />,
  };

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <main className="page">
      <div className="page-header">
        <span className="section-label">DISCOVER</span>
        <h1>Book Categories</h1>
        <p>Explore books based on your interests.</p>
      </div>

      <div className="category-grid large">
        {categories.map((category) => {
          const count = books.filter(
            (book) => book.category === category
          ).length;

          return (
            <Link
              to={`/explore?category=${encodeURIComponent(category)}`}
              className="category-card"
              key={category}
            >
              <div className="category-icon">
                {categoryIcons[category] || <BookOpen />}
              </div>

              <h3>{category}</h3>

              <span>{count} books available</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}