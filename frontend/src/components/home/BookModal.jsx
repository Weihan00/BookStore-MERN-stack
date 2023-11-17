import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative w-[600px] h-[400px] flex flex-col max-w-full rounded-xl p-4"
      >
        <AiOutlineClose className="absolute right-6 top-6 text-3xl px-4"></AiOutlineClose>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <span>{book.title}</span>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <span>{book.author}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          nulla dicta soluta dolor maiores veniam animi accusantium velit
          corporis accusamus. Possimus nemo doloremque neque? Laborum architecto
          corrupti deleniti tempora voluptatum.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
