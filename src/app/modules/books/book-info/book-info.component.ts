import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models';
import { AuthorService, BookService } from 'src/app/services';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  book: Book = new Book();
  bookId: string | null;
  constructor(
    private authorsService: AuthorService,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
    this.getAuthors();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('bookId') || null;
      if (this.bookId !== 'add') {
        this.getById();
      }
    });
  }

  onSubmit() {
    if (this.bookId === 'add') this.post();
    else this.put();
  }

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

  put() {
    this.bookService.post(this.book).subscribe((res) => {
      console.log(res);
    });
  }

  getById() {
    this.bookService.getById(this.bookId).subscribe((res) => {
      console.log(res);
    });
  }
}
