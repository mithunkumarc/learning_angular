import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookComponent } from './book/book-component/book.component';
import { BookCollectionComponent } from './book/book-collection-component/book-collection/book-collection.component';
import { select, Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/book.selector';
import { GoogleBookService } from './book-list/books.service';
import { BookActions, BookApiActions } from './state/book.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MyCounterComponent, 
    BookComponent, 
    BookCollectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private bookService: GoogleBookService
  ) {}
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.store.dispatch(BookApiActions.retrievedBookList({books}));
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook( { bookId }))
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook( { bookId }))
  }
}
