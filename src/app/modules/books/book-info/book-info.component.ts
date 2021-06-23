import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models';
import { AuthorService, BookService } from 'src/services';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  book: Book = new Book();
  constructor(
    private authorsService: AuthorService,
    private bookService: BookService
  ) {}

  ngOnInit() {}

  getAuthors() {
    this.authorsService.getAll().subscribe((res) => {
      console.log(res);
    });
  }

  post() {
    this.bookService.post(this.book).subscribe((res) => {
      console.log(res);
    });
  }

  getById() {
    this.bookService.getById('this.book').subscribe((res) => {
      console.log(res);
    });
  }
}
