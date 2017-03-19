import React from 'react';

const BookListAppList = (props) => (
  <ul>
    {
      props.list.map((book) => {
        return (
          <li key={book._id}>
            <h3>{book.title}</h3>
              <p>{book.author}</p>
          </li>
        );
      })
    }
  </ul>
);

export default BookListAppList;