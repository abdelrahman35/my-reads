import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../../Components/BookCard/BookCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
const SearchPage = () => {
  const { loading, searchedBooks } = useSelector((state) => state.searchResult);

  return (
    <div className="mt-12">
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {Array.isArray(searchedBooks) ? (
            searchedBooks?.map((book) => (
              <div className="basis-1/3 ">
                <BookCard book={book} key={book.id} />
              </div>
            ))
          ) : (
            <div>no result</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
