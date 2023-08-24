import React, { createContext, useState } from "react";
import { base_url } from "./../constants/index";

export const BooksListContext = createContext();

const BooksListContextProvider = ({ children }) => {
  // States
  const [doneFetchBooks, setdoneFetchBooks] = useState(false);
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  //Fetchs
  //Fetch books based on parameters passed
  const getBooks = (q_book) => {
    fetch(`${base_url}api/books?q=${q_book}`)
      .then((res) => res.json())
      .then((data) => {
        setdoneFetchBooks(true);
        if(data?.status === true){
          setBooks(data?.result?.items);
          setMessage("");
        }else {
          setMessage(data?.msg);
        }
      })
  };

  const validateSearch = (
    e,
    q_book = document.querySelector("#q_book").value
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    if (q_book === "") {
      setdoneFetchBooks(false);
      setBooks([]);
      setMessage("Try searching for something first :)");
      return false
    } else {
      getBooks(q_book);
      setdoneFetchBooks(false);
      return true
    }
  };

  return (
    <BooksListContext.Provider
      value={{ doneFetchBooks, books, message, validateSearch, setBooks, setdoneFetchBooks, setMessage }}
    >
      {children}
    </BooksListContext.Provider>
  );
};

export default BooksListContextProvider;
