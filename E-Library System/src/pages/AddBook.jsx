import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Upload,
  X,
} from "lucide-react";

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    isbn: "",
    publishedYear: "",
    language: "English",
    pages: "",
    price: "",
  });

  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCoverImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCoverImage(file);
    }
  };

  const handlePdfFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPdfFile(file);
    }
  };

  const removeCoverImage = () => {
    setCoverImage(null);
  };

  const removePdfFile = () => {
    setPdfFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.category) {
      alert("Please fill in Title, Author and Category.");
      return;
    }

    const newBook = {
      ...formData,
      coverImage: coverImage ? coverImage.name : "",
      pdfFile: pdfFile ? pdfFile.name : "",
      id: Date.now(),
    };

    console.log("New Book:", newBook);

    alert("Book added successfully!");

    // Clear form
    setFormData({
      title: "",
      author: "",
      category: "",
      description: "",
      isbn: "",
      publishedYear: "",
      language: "English",
      pages: "",
      price: "",
    });

    setCoverImage(null);
    setPdfFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-5 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-3 rounded-xl">
            <BookOpen size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Add New Book
            </h1>

            <p className="text-gray-500 mt-1">
              Add a new book to your e-library
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8"
      >

        {/* Basic Information */}
        <div className="mb-8">

          <h2 className="text-xl font-semibold text-gray-900 mb-5">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Book Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Book Title *
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>

              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Business">Business</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="Fiction">Fiction</option>
                <option value="Self Help">Self Help</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* ISBN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ISBN
              </label>

              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="Enter ISBN number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Published Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published Year
              </label>

              <input
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                placeholder="e.g. 2025"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Pages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Pages
              </label>

              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="e.g. 350"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Description */}
        <div className="mb-8">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Write a short description about the book..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>

        {/* Files */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Cover Image */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Book Cover
            </label>

            <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition min-h-[180px]">

              <Upload
                size={35}
                className="text-gray-400 mb-3"
              />

              <span className="font-medium text-gray-700">
                Upload Cover Image
              </span>

              <span className="text-sm text-gray-400 mt-1">
                PNG, JPG or JPEG
              </span>

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleCoverImage}
                className="hidden"
              />

            </label>

            {coverImage && (
              <div className="mt-3 flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">

                <span className="text-sm text-gray-700 truncate">
                  {coverImage.name}
                </span>

                <button
                  type="button"
                  onClick={removeCoverImage}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>

              </div>
            )}

          </div>

          {/* PDF */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Book PDF
            </label>

            <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition min-h-[180px]">

              <Upload
                size={35}
                className="text-gray-400 mb-3"
              />

              <span className="font-medium text-gray-700">
                Upload PDF
              </span>

              <span className="text-sm text-gray-400 mt-1">
                PDF files only
              </span>

              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfFile}
                className="hidden"
              />

            </label>

            {pdfFile && (
              <div className="mt-3 flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">

                <span className="text-sm text-gray-700 truncate">
                  {pdfFile.name}
                </span>

                <button
                  type="button"
                  onClick={removePdfFile}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>

              </div>
            )}

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 border-t pt-6">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Add Book
          </button>

        </div>

      </form>
    </div>
  );
};

export default AddBook;