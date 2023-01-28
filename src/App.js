import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3001/books"
        );
        setBooks(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const deleteBookById = async (id) => {
    const { data: deleted } = await axios.delete(
      `http://localhost:3001/books/${id}`,
      id
    );
    const updatedBooks = books.filter((book) => {
      return book.id !== deleted.id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", { title });

    console.log(data);
    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
