import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookShelf from "../../Components/BookShelf/BookShelf";
const MyCatalog = () => {
  const dispatch = useDispatch();
  const bookStatus = useSelector((state) => state.bookStatus);
  const bookArrays = Object.entries(bookStatus);
  console.log(bookArrays);
  bookArrays?.map((shelf) => console.log(shelf[1]));
  return (
    <div>
      {bookArrays?.map((shelf, index) => (
        <div key={index}>
          <BookShelf shelfName={shelf[0]} books={shelf[1]} />
        </div>
      ))}
    </div>
  );
};

export default MyCatalog;
