import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [markBooks, setMarkBooks] = useState([]);
  const [wishLists, setWishLists] = useState([]);

  //   Marked as read function
  const handleMarkedBook = (marked) => {
    const findMarkedBook = markBooks.find(
      (book) => book.bookId == marked.bookId,
    );
    if (!findMarkedBook) {
      setMarkBooks([...markBooks, marked]);
      toast.success(`${marked.bookName} added to mark list`);
    } else {
      toast.error(`${marked.bookName} The book is already added`);
    }
  };
  //   Wishlist function
  const handleWIshedList = (marked) => {
    const isReadList = markBooks.find((book) => book.bookId === marked.bookId);
    if (isReadList) {
      toast.error(`${marked.bookName} is already in mark list`);
      return;
    }
    const findWishLists = wishLists.find(
      (book) => book.bookId == marked.bookId,
    );
    if (!findWishLists) {
      setWishLists([...wishLists, marked]);
      toast.success(`${marked.bookName} added to wish list`);
    } else {
      toast.error(`${marked.bookName} The book is already in wishlist`);
    }
  };
  const props = {
    markBooks,
    setMarkBooks,
    handleMarkedBook,
    wishLists,
    setWishLists,
    handleWIshedList,
  };
  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export default BookProvider;
