import { createReducer, on } from '@ngrx/store';
import { BookActions } from './book.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialState,
    on(BookActions.removeBook, (state, { bookId }) => 
        state.filter((id) => id != bookId)
    ),
    on(BookActions.addBook, (state, {bookId}) => {
        if(state.indexOf(bookId) > -1) {
            return state;
        } else {
            return [...state, bookId];
        }
    })
);