import React from "react";
import { Link } from "react-router-dom";
import ActionBar from "../ActionBar/ActionBar";
const BookCard = ({ book }) => {
  return (
    <div className="flex relative  m-3 p-2 h-72 font-sans border-2 border-darkGrey rounded-md shadow-xl">
      <img src={book.imageLinks.smallThumbnail} />
      <div className="flex flex-col">
        <div className="m-2 font-Ubuntu">
          <span className="font-bold font-Montserrat">Title:</span> {book.title}
        </div>
        <div className="m-2 font-bold">
          <span className="font-bold font-Montserrat">Authors:</span>
          {book?.authors?.map((author) => (
            <p className="font-light font-Ubuntu">{author}</p>
          ))}
        </div>

        <div className="absolute bottom-0 right-0">
          <div className="border-b-2 border-darkGrey text-darkGrey m-3 w-36 hover:border-blackColor hover:text-blackColor font-Ubuntu duration-300 ease-in-out">
            <button className="p-1 mr-4 hover:mr-6 ease-in duration-200">
              <Link to={`/book/${book.id}`}>Details</Link>
            </button>
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
