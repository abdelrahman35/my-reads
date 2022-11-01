import { combineReducers } from "redux";

const bookStatusReducer = (
  state = { wantToRead: [], read: [], currentlyReading: [] },
  action
) => {
  const bookFromAction = action.payload;

  switch (action.type) {
    case "ADD_BOOK_TO_WISH":
      if (
        state.wantToRead.some((book) => book.id === bookFromAction.id) ||
        state.currentlyReading.some((book) => book.id === bookFromAction.id) ||
        state.read.some((book) => book.id === bookFromAction.id)
      ) {
        return {
          ...state,
          wantToRead: [...state.wantToRead],
        };
      } else {
        return {
          ...state,
          wantToRead: [...state.wantToRead, bookFromAction],
        };
      }

    case "ADD_BOOK_TO_READ":
      if (
        state.wantToRead.some((book) => book.id === bookFromAction.id) ||
        state.currentlyReading.some((book) => book.id === bookFromAction.id) ||
        state.read.some((book) => book.id === bookFromAction.id)
      ) {
        return {
          ...state,
          read: [...state.read],
        };
      } else {
        return {
          ...state,
          read: [...state.read, bookFromAction],
        };
      }

    case "ADD_BOOK_TO_currentlyReading":
      if (
        state.wantToRead.some((book) => book.id === bookFromAction.id) ||
        state.currentlyReading.some((book) => book.id === bookFromAction.id) ||
        state.read.some((book) => book.id === bookFromAction.id)
      ) {
        return {
          ...state,
          currentlyReading: [...state.currentlyReading],
        };
      } else {
        return {
          ...state,
          currentlyReading: [...state.currentlyReading, bookFromAction],
        };
      }

    case "REMOVE_BOOK":
      return {
        ...state,
        currentlyReading: state.currentlyReading.filter(
          (book) => book.id !== bookFromAction.id
        ),

        wantToRead: state.wantToRead.filter(
          (book) => book.id !== bookFromAction.id
        ),

        read: state.read.filter((book) => book.id !== bookFromAction.id),
      };
    default:
      return state;
  }
};

const getAllBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_BOOKS_REQUEST":
      return { loading: true };
    case "GET_ALL_BOOKS_SUCCESS":
      return { loading: false, allBooks: action.payload };
    case "GET_ALL_BOOKS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const getBookDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BOOK_DETAILS_REQUEST":
      return { loading: true };
    case "GET_BOOK_DETAILS_SUCCESS":
      return { loading: false, book: action.payload };
    case "GET_BOOK_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
const updateShelfReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_SHELF_REQUEST":
      return { loading: true };
    case "ADD_TO_SHELF_SUCCESS":
      return { loading: false, shelf: action.payload };
    case "ADD_TO_SHELF_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
const searchBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS_REQUEST":
      return { loading: true };
    case "SEARCH_BOOKS_SUCCESS":
      return { loading: false, searchedBooks: action.payload };
    case "SEARCH_BOOKS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  allBooks: getAllBooksReducer,
  searchResult: searchBooksReducer,
  shelf: updateShelfReducer,
  bookDetails: getBookDetailsReducer,
  bookStatus: bookStatusReducer,
});
