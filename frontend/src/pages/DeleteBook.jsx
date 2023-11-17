import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });

        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-2xl">Delete Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col border-2 rounded-xl w-[600px] mx-auto border-sky-400 justify-center ">
        <h1 className="mx-auto my-4">
          Are you sure you want to delete this book?
        </h1>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white w-8/12 mx-auto my-4 py-2"
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
