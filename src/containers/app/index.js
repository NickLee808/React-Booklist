import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookListAppSearch from '../../components/BookListAppSearch.js';
import BookListAppList from '../../components/BookListAppList.js';
import './styles.css';
import { bookList } from './data.js'

class App extends Component {
  constructor(){
    super();
    this.title = 'Book List App';
    this.bookList = { bookList };
  }

  doClick = () => {
    console.log( this.title );
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title={this.title}
          doClick={this.doClick}
        />
        <BookListAppSearch/>
        <BookListAppList
          list={ bookList }
        />
      </div>
    );
  }
}

export default App;