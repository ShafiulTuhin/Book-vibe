import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { handleMarkedBook, handleWIshedList } = useContext(BookContext);

  const books = useLoaderData();
  const params = useParams();
  const findBook = books.find((book) => book.bookId == params.id);
  const {
    image,
    bookName,
    author,
    category,
    tags,
    review,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = findBook;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  ">
        {/* Left: Book Image */}
        <div className="flex justify-center bg-slate-100 p-[74px]">
          <img
            src={image}
            alt={bookName}
            className="rounded-2xl shadow-lg w-64 md:w-80 lg:w-96 object-cover"
          />
        </div>

        {/* Right: Book Info */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">{bookName}</h1>
          <p className="text-lg text-gray-500">by {author}</p>

          <div className="badge badge-success">{category}</div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-outline">
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {review}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <p>
              <span className="font-semibold">Pages:</span> {totalPages}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {rating}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {yearOfPublishing}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <button
              onClick={() => handleMarkedBook(findBook)}
              className="btn btn-success text-white"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWIshedList(findBook)}
              className="btn btn-info text-white"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
