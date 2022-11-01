import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../../store/actions";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import ActionBar from "../../Components/ActionBar/ActionBar";
const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [id]);
  const { loading, book } = useSelector((state) => state.bookDetails);
  console.log(book);
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className="flex flex-row m-2">
            <div className="m-5 basis-1/4">
              <img
                className="w-96"
                src={book?.imageLinks.thumbnail}
                alt={book?.title}
              />
            </div>
            <div className="m-5 basis-3/4 border-l-2 border-blackColor pl-5">
              <div className="text-5xl font-Ubuntu">
                <span className="font-bold font-Montserrat">Title:</span>{" "}
                <span className="text-blackColor">{book?.title}</span>
              </div>
              <div className="mt-5">
                <ActionBar book={book} />
                <RatingComponent ratingValue={book?.averageRating} />
              </div>
              <div className="text-lg font-Ubuntu">
                <span className="font-bold font-Montserrat">Authors: </span>
                {book?.authors?.map((author) => (
                  <span className="font-light font-Ubuntu text-blackColor">
                    {author}
                  </span>
                ))}
              </div>

              <div className="text-lg font-Ubuntu">
                <span className="font-bold font-Montserrat">Description:</span>

                <p className="text-blackColor font-Ubuntu ">
                  {book?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
