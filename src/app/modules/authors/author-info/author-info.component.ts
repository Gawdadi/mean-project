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
  authorId: string | null;
  constructor(
    private authorsService: AuthorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.authorId = params.get('authorId') || null;
      if (this.authorId !== 'add') {
        this.getById();
      }
    });
  }

  onSubmit() {
    console.log(this.author);
    return;
    if (this.authorId === 'add') this.put();
    else this.post();
  }

  post() {
    this.authorsService.post(this.author).subscribe((res) => {
      console.log(res);
    });
  }

  put() {
    this.authorsService.post(this.author).subscribe((res) => {
      console.log(res);
    });
  }

  getById() {
    this.authorsService.getById('this.author').subscribe((res) => {
      console.log(res);
    });
  }
}
