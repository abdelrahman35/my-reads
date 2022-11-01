import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <div className="flex flex-wrap p-8 justify-between items-center border-b-2 font-Montserrat border-gray-200">
      {" "}
      <Link
        to="/"
        className="justify-start no-underline font-bold text-3xl basis-1/3"
      >
        <p className="text-mainColor hover:text-blackColor">My Reads</p>
      </Link>
      <div className="flex justify-evenly basis-1/3">
        <Link to="/aboutus" className="justify-start no-underline font-medium ">
          <p className="text-mainColor hover:text-blackColor">About Us</p>
        </Link>
        <Link to="/catalog" className="justify-start no-underline font-medium ">
          <p className="text-mainColor hover:text-blackColor">Catalog</p>
        </Link>
        <Link to="/contact" className="justify-start no-underline font-medium">
          <p className="text-mainColor hover:text-blackColor">Contacts</p>
        </Link>
      </div>
      <div className="flex justify-end basis-1/3">
        <SearchBar />
        <Link to="/search" className="no-underline font-bold text-3xl">
          <i className="fas fa-search text-mainColor hover:text-blackColor ml-5"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
