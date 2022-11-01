import React from "react";
import BookCard from "../BookCard/BookCard";

const BookShelf = ({ shelfName, books }) => {
  console.log(books);
  return (
    <div>
      <h2 className="m-5 font-Montserrat text-mainColor text-2xl">
        Category:{" "}
        {shelfName === "wantToRead"
          ? "To Read"
          : shelfName === "read"
          ? "Read"
          : "Reading"}
      </h2>
      <div className="grid grid-cols-3 gap-5  border-b-2 border-blackColor  pb-5">
        {books?.length > 0 ? (
          books?.map((book) => (
            <div className="" key={book.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <div className="uppercase ml-3 font-Ubuntu font-bold ">
            {" "}
            there is no books{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookShelf;
