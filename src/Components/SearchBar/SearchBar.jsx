import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../store/actions";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooks(query));
    navigate("/search", { replace: true });
  };
  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title"
          className="placeholder:italic placeholder:text-gray-200 w-50 border-b-2	 border-gray-200  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:none  sm:text-sm"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
