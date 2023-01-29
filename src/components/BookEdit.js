import { useState } from "react";

function BookEdit({ books, onSubmit }) {
  const [title, setTitle] = useState(books.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(books.id, title);
    // console.log(books.id, title);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  );
}

export default BookEdit;
