import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models';
import { AuthorService } from 'src/app/services';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss'],
})
export class AuthorInfoComponent implements OnInit {
  author: Author = new Author();
  isLoading: boolean = false;
  authorId: string;
  constructor(
    private authorsService: AuthorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.authorId = params.get('authorId');
      if (this.authorId !== 'add') {
        this.getById();
      }
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.authorId === 'add') this.post();
    else this.put();
  }

  post() {
    this.authorsService.post(this.author).subscribe((res) => {
      this.author = res;
      this.isLoading = false;
    });
  }

  put() {
    this.authorsService.put(this.author).subscribe((res) => {
      this.author = res;
      this.isLoading = false;
    });
  }

  getById() {
    this.authorsService.getById(this.authorId).subscribe((res) => {
      this.author = res;
    });
  }
}
