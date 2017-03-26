import { ADD_BOOK } from '../actions';

const initialState = {
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
}