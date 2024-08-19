import { createReducer, on } from '@ngrx/store';
import { BookApiActions } from './book.action';
import { Book } from './../book-list/book.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BookApiActions.retrievedBookList, (_state, {books}) => books)
);