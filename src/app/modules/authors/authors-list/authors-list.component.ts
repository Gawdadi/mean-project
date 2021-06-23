import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models';
import { AuthorService } from 'src/services';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];
  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.authorService.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
