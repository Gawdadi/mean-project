import { Component, OnInit } from '@angular/core';
import { IssueBooksService } from 'src/app/services';

@Component({
  selector: 'app-issuedBooks',
  templateUrl: './issuedBooks.component.html',
  styleUrls: ['./issuedBooks.component.scss'],
})
export class IssuedBooksComponent implements OnInit {
  constructor(private issueBooksService: IssueBooksService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.issueBooksService.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
