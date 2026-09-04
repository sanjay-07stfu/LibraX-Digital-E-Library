import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import ExploreBooks from "./pages/ExploreBooks";
import Categories from "./pages/Categories";
import BookDetails from "./pages/BookDetails";
import Reader from "./pages/Reader";
import Favorites from "./pages/Favorites";
import MyLibrary from "./pages/MyLibrary";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function NotFound() {
  return (
    <main className="empty-state page">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreBooks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/reader/:id" element={<Reader />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/my-library"
          element={
            <ProtectedRoute>
              <MyLibrary />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add"
          element={
            <ProtectedRoute adminOnly>
              <AddBook />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute adminOnly>
              <EditBook />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}