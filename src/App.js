import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get("http://localhost:3001/books");
      setBooks(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
    // fetchData();
  };

  const editBookById = async (id, title) => {
    const { data: editSuccess } = await axios.put(
      `http://localhost:3001/books/${id}`,
      {
        title,
      }
    );
    // console.log(editSuccess.title);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...editSuccess };
      }
      return book;
    });
    // setBooks(updatedBooks);
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", { title });

    console.log(data);
    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
