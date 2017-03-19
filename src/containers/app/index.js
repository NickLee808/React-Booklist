import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js'
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.title = 'Book List App';
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
      </div>
    );
  }
}

export default App;