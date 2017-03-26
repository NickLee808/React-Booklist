import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookListAppSearch from '../../components/BookListAppSearch.js';
import BookListAppList from '../../components/BookListAppList.js';
import { bookList } from './data.js';
import './styles.css';

import { createStore } from 'redux';
import books from './reducers';
import { addBook } from '../../actions';


let store = createStore(books);

export default class App extends Component {
  constructor(){
    super();
    this.title = 'Book List App';
    this.state = {
      filter: ''
    };
    this.addBook = this.addBook.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentWillMount(){
    getBooksFromFakeXHR()
      .then( books => {
        books.forEach( book => {
          this.props.onAddBook(book.title, book.author);
        });
      })
  }

  doClick = () => {
    console.log( this.title );
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle={this.title}/>
        <BookFilterInput setFilter={this.setFilter}/>
        <BookList books={this.props.books}/>
        <BookListAppSearch/>
        <BookListAppList
          list={ bookList }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBook: (title, author) => {
      dispatch(addBook(title, author));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);