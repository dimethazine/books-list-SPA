import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // Course way of doing it====================
  // const renderedBooks = books.map((book) => {
  //   return (
  //     <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
  //   );
  // });

  return (
    <div className="book-list">
      {/* {renderedBooks} //undo// course way of doing it */}
      {books.map((book) => (
        <BookShow
          onDelete={onDelete}
          key={book.id}
          book={book}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default BookList;
