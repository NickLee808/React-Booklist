import { combineReducers } from 'redux';
import books from './books';
import { ADD_BOOK } from '../actions';

const reducers = combineReducers({
  books
});

export default reducers;

/*const initialState = {
  books: []
};

export default function books(state = initialState, action) {
  switch(action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        books: [
          // "spread operator"
          ...state.books,
          {
            title: action.title,
            author: action.author
          }
        ]
      });
    default:
      return state;
  }
}*/