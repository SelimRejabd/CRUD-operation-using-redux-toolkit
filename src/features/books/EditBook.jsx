import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateBook({id, title, author})); 
    navigate('/show-books', {replace : true});
  }

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label
            htmlFor="title"
            name="title"
            className="block text-sm font-medium"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="author"
            name="author"
            className="block text-sm font-medium"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
