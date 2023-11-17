import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import BookModal from "./BookModal";
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg p-4 relative hover:shadow-lg "
    >
      <h4 className="absolute bg-red-300 rounded-lg px-4 py-1 top-1 right-2">
        {book.publishYear}
      </h4>
      <h4>{book._id}</h4>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <span>{book.title}</span>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <span>{book.author}</span>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800" />
        </Link>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>

      {showModal && <BookModal book={book} onClose={onClose} />}
    </div>
  );
};

export default BookSingleCard;
