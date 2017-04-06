import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import Books from '../../components/Book.js';
import BookListArray from '../../lib/lib.js';
import './styles.css';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import books from '../../reducers';
import { addBook } from '../../actions';
let store = createStore(books);
store.dispatch(addBook('HACK THE PLANET', 'Borgz'));
console.log(store.getState());
class App extends Component {
  constructor (){
    super();
    this.title = 'Book List App';
    this.book = [];
    this.state = {
      books : BookListArray,
      value: 'Search by Author or Title'
    };
  }
  // componentWillMount() {
  //   getBooksFromFakeXHR()
  //   .then( books => {
  //     books.forEach( book => {
  //       this.props.onAddBook(book.title, book.author);
  //     })
  //   }) 
  // }
  handleChange = () =>{
    this.setState({value: event.target.value});
  }
  // addBook(book){
  //   addBookToFakeXHR(book)
  //     .then(books =>{
  //       this.
  //     })
  // }
  render() {
    return (
      <div className="App">
        <BookListAppTitle title={this.title}/>
        <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        
        <ul>
          {this.state.books.map(({_id, title, author}) =>
             <Books
        key={_id}
        title={title}
        author={author}
        />
            )}
          </ul>
      </div>
    );
  }
};

// takes Redux's newly made state and maps it to props
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

// 
const mapDispatchToProps = (dispatch) => {
  return {
    onAddBook: (title, author) => {
      dispatch(addBook(title, author));
    }
  }
};

// ties everything together from Redux to React
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);