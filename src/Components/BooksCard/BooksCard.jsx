import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-xl">
      <img src={book.image} alt={book.title} className="w-full h-60 object-cover rounded" />
      <h2 className="mt-2 text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-blue-600 font-semibold">${book.price}</p>
      <Link to={`/books/${book.id}`} className="block mt-3 bg-blue-600 text-white text-center py-2 rounded">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
