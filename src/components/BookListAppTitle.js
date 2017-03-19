import React from 'react';

const BookListAppTitle = (props) => (
  <div className='App-header'>
    <h2>{ props.title }</h2>
    <button onClick={ props.DoClick }>DO CLICK</button>
  </div>
);

export default BookListAppTitle;