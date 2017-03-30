import React from 'react';

const Books = (props) => {
  <li>
    <h3>{props.title}</h3>
    <p>{props.author}</p>
  </li>
};

export default Books;