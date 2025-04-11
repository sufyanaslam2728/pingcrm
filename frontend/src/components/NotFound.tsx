import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-8xl font-extrabold text-gray-900 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! You seem lost.
      </h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist. It might have been moved or
        deleted.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
      >
        🏠 Take me home
      </button>

      <div className="mt-10 text-sm text-gray-400 italic">
        “Not all those who wander are lost.” — J.R.R. Tolkien
      </div>
    </div>
  );
};

export default NotFound;
