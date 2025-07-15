import React from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function NewsCard({ item, onDelete }) {

  const handleDelete = async () => {
    try {
      await API.delete(`/news/${item._id}`);
      onDelete(item._id);
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Error deleting news');
    }
  };

  return (
    <div className="w-full border p-5 rounded-xl shadow-md bg-white flex flex-col h-full">
      {/* Bigger image */}
      <img
        src={item.imageURL}
        alt="news"
        className="h-60 w-full object-cover rounded-lg mb-3"
      />

      <div className="text-sm text-gray-500 mb-1">
        {item.category} | {new Date(item.createdAt).toLocaleString()}
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {item.headline}
      </h2>

      <p className="text-gray-700 text-sm flex-grow">
        {item.description}
      </p>

      
        <div className="flex gap-4 justify-end mt-4">
          <Link
            to={`/edit/${item._id}`}
            className="text-green-600 hover:underline"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
     
    </div>
  );
}
