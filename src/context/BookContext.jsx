import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [markBooks, setMarkBooks] = useState([]);
  console.log(markBooks);

  const handleMarkedBook = (marked) => {
    const findMarkedBook = markBooks.find(
      (book) => book.bookId == marked.bookId,
    );
    if (!findMarkedBook) {
      setMarkBooks([...markBooks, marked]);
    } else {
      console.log("The book is already marked");
    }
  };
  const props = { markBooks, setMarkBooks, handleMarkedBook };
  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export default BookProvider;
