import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const CreateBooks = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const saveBook = async () => {
    setLoading(true);
    const book = {
      title,
      author,
      publishYear,
    };

    try {
      const response = await axios.post("http://localhost:5555/books", book);
      setLoading(false);
      enqueueSnackbar("Book created successfully", { variant: "success" });
      navigate("/");

      console.log("response:", response);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error", { variant: "error" });

      console.log("error:", error);
    }
  };
  return (
    <div className="m-4">
      <BackButton />
      <h1 className="text-2xl my-2">Create Book</h1>

      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 p-4 rounded-xl w-[600px] mx-auto">
        <div className="flex flex-col my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="publishYear">
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-sky-300 w-10/12 " onClick={saveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
