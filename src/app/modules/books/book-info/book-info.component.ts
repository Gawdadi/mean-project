import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author, Book } from 'src/app/models';
import { AuthorService, BookService } from 'src/app/services';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  book: Book = new Book();
  authors: Author[] = [];
  bookId: string;
  isLoading: boolean = false;
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
    this.isLoading = true;
    if (this.bookId === 'add') this.post();
    else this.put();
  }

  getAuthors() {
    this.authorsService.getAll().subscribe((res) => {
      this.authors = res.content;
    });
  }

  post() {
    this.bookService.post(this.book).subscribe(
      (res) => {
        this.book = new Book();
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  put() {
    this.bookService.put(this.book).subscribe(
      (res) => {
        this.book = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  getById() {
    this.bookService.getById(this.bookId).subscribe(
      (res) => {
        this.book = res;
      },
      (error) => {}
    );
  }
}
