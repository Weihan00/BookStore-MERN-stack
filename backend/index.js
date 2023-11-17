import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import bookRoute from "./routes/bookRoute.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello world");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App is listeing ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// async function createBook() {
//   const book = new Book({
//     title: "Laughable lovers",
//     author: "Milan Kundera",
//     publishYear: 1897,
//   });

//   const res = await book.save();
//   console.log(res);
// }

// createBook();
