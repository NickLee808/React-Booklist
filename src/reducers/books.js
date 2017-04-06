import {ADD_BOOK} from '../actions';

const initialState = {
  books: []
};

function books(state = initialState, action){ 
  switch(action.type) {
    case ADD_BOOK:
      //creates empty opbject, takes current state, assigns it to the new empty object
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            title: action.title,
            author: action.author
          }
        ]
      });
    //if no other case called, do this
    default:
      return state;
  }
}

export default books;