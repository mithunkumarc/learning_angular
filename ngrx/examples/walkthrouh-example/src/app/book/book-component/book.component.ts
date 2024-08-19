import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book-list/book.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
