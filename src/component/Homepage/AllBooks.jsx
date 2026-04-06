import React, { use } from "react";
import StarImg from "../../assets/star.png";
import { Link } from "react-router";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className="lg:py-20 py-10 ">
      <h2 className="bg-gray-200 text-3xl text-[#444444] font-bold text-center py-7 mb-6 rounded-lg">
        Books
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4">
        {books.map((book) => (
          <Link
            to={`/bookDetails/${book.bookId}`}
            className="border border-gray-200 p-4 rounded-lg"
            key={book.bookId}
          >
            <div className="bg-slate-100 py-[80px] rounded-lg mb-6">
              <img
                src={book.image}
                alt=""
                className="w-[134px] h-[166px] mx-auto"
              />
            </div>
            <div className="flex gap-8 py-2 px-5 mb-4">
              {book.tags.map((t, i) => (
                <p key={i} className="text-success font-bold">
                  {t}
                </p>
              ))}{" "}
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[#131313] mb-4 line-clamp-1">
                {book.bookName}
              </h2>
              <p className="text-[#797979]">By: {book.author}</p>
            </div>
            <div className="font-bold text-[#424242] flex justify-between items-center mt-4 border-t-2 border-dashed border-gray-300">
              <h2>{book.category}</h2>
              <div className="flex items-center gap-5 py-3">
                <p>{book.rating}</p>
                <img src={StarImg} alt="" className="h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
