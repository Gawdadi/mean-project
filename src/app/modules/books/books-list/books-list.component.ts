import { Component, OnInit } from '@angular/core';
import { Book, BookResponse } from 'src/app/models';
import { BookService } from 'src/app/services';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BookService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.booksService.getAll().subscribe((res: any) => {
      this.books = res.content;
    });
  }
}
