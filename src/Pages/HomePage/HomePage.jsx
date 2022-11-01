import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../Components/BookCard/BookCard";
import { getAllBooks } from "../../store/actions";
import axios from "axios";

const HomePage = () => {
  const dispatch = useDispatch();
  const { allBooks } = useSelector((state) => state.allBooks);
  useEffect(() => {
    dispatch(getAllBooks());
    // getAllBooks();
  }, []);

  const axiosInstance = axios.create({
    baseURL: "https://reactnd-books-api.udacity.com",
  });

  let token = localStorage.token;

  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

  const headers = {
    Accept: "application/json",
    Authorization: token,
  };
  useEffect(() => {
    axiosInstance
      .get(`/books`, { headers })
      .then((res) => console.log(res.data.books));
  }, []);
  return (
    allBooks && (
      <div className="flex flex-wrap justify-center items-center">
        {allBooks?.map((book) => (
          <div className="basis-1/3 " key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    )
  );
};

export default HomePage;
