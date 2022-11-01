import React from "react";
import { useDispatch } from "react-redux";
import {
  addToRead,
  addToReading,
  addToWish,
  removeBookStatus,
} from "../../store/actions";
const ActionBar = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-20">
      <div>
        <button
          onClick={() => {
            dispatch(addToWish(book));
          }}
        >
          <i className="fa fa-heart hover:text-darkGrey "></i>
        </button>
      </div>
      <div>
        {" "}
        <button
          onClick={() => {
            dispatch(addToReading(book));
          }}
        >
          <i className="fa fa-book hover:text-darkGrey " aria-hidden="true"></i>
        </button>
      </div>
      <div
        onClick={() => {
          dispatch(addToRead(book));
        }}
      >
        <button>
          <i
            className="fa fa-check hover:text-darkGrey "
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div>
        {" "}
        <button
          onClick={() => {
            dispatch(removeBookStatus(book));
          }}
        >
          <i
            className="fa fa-trash hover:text-darkGrey "
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
