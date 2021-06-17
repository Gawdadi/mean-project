import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  constructor(private booksService: BookService) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.booksService.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
