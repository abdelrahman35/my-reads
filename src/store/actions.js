import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reactnd-books-api.udacity.com",
});

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};
export const getAllBooks = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_BOOKS_REQUEST" });
    const { data } = await axiosInstance.get(`/books`, { headers });
    dispatch({ type: "GET_ALL_BOOKS_SUCCESS", payload: data?.books });
  } catch (error) {
    dispatch({ type: "GET_ALL_BOOKS_FAIL", payload: error });
  }
};
export const getBookDetails = (bookId) => async (dispatch) => {
  try {
    dispatch({ type: "GET_BOOK_DETAILS_REQUEST" });
    const { data } = await axiosInstance.get(`/books/${bookId}`, { headers });
    dispatch({ type: "GET_BOOK_DETAILS_SUCCESS", payload: data.book });
  } catch (error) {
    dispatch({ type: "GET_BOOK_DETAILS_FAIL", payload: error });
  }
};
export const updateShelf = (book, shelf) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TO_SHELF_REQUEST" });
    const response = await axiosInstance.put(`/books/${book.id}`, {
      headers,
    });
    dispatch({ type: "ADD_TO_SHELF_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "ADD_TO_SHELF_FAIL", payload: error });
  }
};
export const searchBooks =
  (query, maxResults = 9) =>
  async (dispatch) => {
    try {
      dispatch({ type: "SEARCH_BOOKS_REQUEST" });
      const { data } = await axiosInstance.post(
        `/search`,
        { query, maxResults },
        {
          headers,
        }
      );
      dispatch({ type: "SEARCH_BOOKS_SUCCESS", payload: data.books });
    } catch (error) {
      dispatch({ type: "SEARCH_BOOKS_FAIL", payload: error });
    }
  };

export const addToWish = (book) => (dispatch) => {
  console.log(book);
  try {
    dispatch({ type: "ADD_BOOK_TO_WISH", payload: book });
  } catch (error) {
    console.log(error);
  }
};
export const addToRead = (book) => (dispatch) => {
  try {
    dispatch({ type: "ADD_BOOK_TO_READ", payload: book });
  } catch (error) {
    console.log(error);
  }
};
export const addToReading = (book) => (dispatch) => {
  try {
    dispatch({ type: "ADD_BOOK_TO_currentlyReading", payload: book });
  } catch (error) {
    console.log(error);
  }
};

export const removeBookStatus = (book) => (dispatch) => {
  console.log(book);
  try {
    dispatch({ type: "REMOVE_BOOK", payload: book });
  } catch (error) {
    console.log(error);
  }
};
