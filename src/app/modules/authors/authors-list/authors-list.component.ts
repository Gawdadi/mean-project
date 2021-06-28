import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models';
import { AuthorService } from 'src/app/services';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAll();
  }

  create() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onEdit(authorId: string) {
    this.router.navigate([authorId], { relativeTo: this.route });
  }

  getAll() {
    this.authorService.getAll().subscribe((res: any) => {
      this.authors = res.content;
    });
  }
}
