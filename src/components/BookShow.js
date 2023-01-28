import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  // const handleDeleteClick = () => {
  //   onDelete(book.id);
  // };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.title}/300/200`}
        alt="books"
      />
      {showEdit ? (
        <BookEdit onSubmit={handleSubmit} books={book} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
