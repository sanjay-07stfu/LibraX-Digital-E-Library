import {
  BookOpen,
  Users,
  Eye,
  Heart,
  Plus,
  Trash2,
  Edit,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function AdminDashboard() {
  const { books, deleteBook } = useBooks();

  const totalReads = books.reduce((sum, book) => sum + book.reads, 0);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook(id);
    }
  };

  return (
    <main className="admin-page">
      <div className="admin-header">
        <div>
          <span className="section-label">ADMIN PANEL</span>
          <h1>Dashboard</h1>
          <p>Manage your digital library.</p>
        </div>

        <Link to="/admin/add" className="primary-btn">
          <Plus size={18} />
          Add Book
        </Link>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <BookOpen />
          <span>Total Books</span>
          <strong>{books.length}</strong>
        </div>

        <div className="admin-stat">
          <Users />
          <span>Total Users</span>
          <strong>5,248</strong>
        </div>

        <div className="admin-stat">
          <Eye />
          <span>Total Reads</span>
          <strong>{totalReads.toLocaleString()}</strong>
        </div>

        <div className="admin-stat">
          <Heart />
          <span>Favorites</span>
          <strong>8,492</strong>
        </div>
      </div>

      <section className="admin-table-section">
        <div className="table-heading">
          <div>
            <h2>Book Management</h2>
            <p>Manage your library collection.</p>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Category</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Reads</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div className="table-book">
                      <img src={book.cover} alt={book.title} />
                      <div>
                        <strong>{book.title}</strong>
                        <span>{book.author}</span>
                      </div>
                    </div>
                  </td>

                  <td>{book.category}</td>
                  <td>{book.year}</td>
                  <td>⭐ {book.rating}</td>
                  <td>{book.reads.toLocaleString()}</td>

                  <td>
                    <div className="table-actions">
                      <Link
                        to={`/admin/edit/${book.id}`}
                        className="table-btn"
                      >
                        <Edit size={16} />
                      </Link>

                      <button
                        className="table-btn danger"
                        onClick={() => deleteItem(book.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}