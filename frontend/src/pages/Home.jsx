import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/books");
        const books = response.data.data;
        setBooks([...books]);
        console.log(books);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <button
          onClick={() => setShowType("table")}
          className="bg-sky-300 rounded-lg px-4 py-1 mr-2 hover:bg-sky-600"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-sky-300 rounded-lg px-4 py-1 mr-2 hover:bg-sky-600"
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : ""}
      {showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
