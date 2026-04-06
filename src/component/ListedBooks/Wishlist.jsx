import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router";

const Wishlist = ({ sortingType }) => {
  const { wishLists } = useContext(BookContext);
  const navigate = useNavigate();
  const backToBooks = () => {
    navigate("/");
  };

  // filter sort
  let filterReadList = wishLists;
  if (sortingType === "pages") {
    filterReadList = [...wishLists].sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "rating") {
    filterReadList = [...wishLists].sort((a, b) => a.rating - b.rating);
  }

  // If no book in readlist
  if (filterReadList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 px-4 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16 max-w-md w-full flex flex-col items-center gap-4">
          <FaRegSadTear className="text-6xl md:text-8xl text-gray-400" />
          <h2 className="font-bold text-gray-600 text-2xl md:text-3xl">
            No Wishlist Data Found!
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            You haven’t added any books to your wishlist yet. Browse the library
            and mark your favorite books to see them here.
          </p>
          <button
            onClick={backToBooks}
            className="cursor-pointer mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            Browse Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:px-0 px-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {filterReadList.map((book) => (
          <div
            key={book.bookId}
            className="w-full max-w-[1320px] h-[280px] p-4 flex flex-col md:flex-row gap-4 md:gap-6 rounded-xl shadow-lg bg-white"
          >
            {/* Left: Book Image */}
            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-full">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right: Book Info */}
            <div className="flex flex-col justify-between w-full">
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold">
                  {book.bookName}
                </h2>
                <p className="text-gray-600 md:text-lg">by {book.author}</p>

                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="badge badge-success">{book.category}</span>
                  {book.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline">
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 text-sm md:text-base line-clamp-4 mt-1">
                  {book.review}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-sm pt-2">
                <p>
                  <span className="font-semibold">Pages:</span>{" "}
                  {book.totalPages}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span> ⭐{" "}
                  {book.rating}
                </p>
                <p>
                  <span className="font-semibold">Publisher:</span>{" "}
                  {book.publisher}
                </p>
                <p>
                  <span className="font-semibold">Year:</span>{" "}
                  {book.yearOfPublishing}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
