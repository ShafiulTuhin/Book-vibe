import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readLists, setReadLists] = useState([]);
  const [wishLists, setWishLists] = useState([]);

  //   Marked as read function
  const handleMarkedBook = (marked) => {
    const findMarkedBook = readLists.find(
      (book) => book.bookId == marked.bookId,
    );
    if (!findMarkedBook) {
      setReadLists([...readLists, marked]);
      toast.success(`${marked.bookName} added to mark list`);
    } else {
      toast.error(`${marked.bookName} The book is already added`);
    }
  };
  //   Wishlist function
  const handleWIshedList = (marked) => {
    const isReadList = readLists.find((book) => book.bookId === marked.bookId);
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
    readLists,
    setReadLists,
    handleMarkedBook,
    wishLists,
    setWishLists,
    handleWIshedList,
  };
  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export default BookProvider;
