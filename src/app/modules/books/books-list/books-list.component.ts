import { Component, OnInit } from '@angular/core';
import { Author, Book } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  authorMap: any = {};
  constructor(
    private booksService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getWithAuthors();
  }

  getWithAuthors() {
    this.booksService.getWithAuthors().subscribe((res: any) => {
      this.books = res.content;
      this.authorMap = res.authors;
    });
  }

  onEdit(authorId: string) {
    console.log(authorId);
    this.router.navigate([authorId], { relativeTo: this.route });
  }
}
