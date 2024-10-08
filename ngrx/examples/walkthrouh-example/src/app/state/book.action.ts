import { createActionGroup, props } from '@ngrx/store';
import { Book } from './../book-list/book.model';

export const BookActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string}>()
    }
});

export const BookApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrieved Book List': props<{books: ReadonlyArray<Book>}>(),
    }
});