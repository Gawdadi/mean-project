import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private booksService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.booksService.getAll().subscribe((res: any) => {
      this.books = res.content;
    });
  }

  onEdit(authorId: string) {
    console.log(authorId);
    this.router.navigate([authorId], { relativeTo: this.route });
  }
}
