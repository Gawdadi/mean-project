import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsRoutes } from './authors.routing';

const COMPONENTS = [AuthorsListComponent, AuthorInfoComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [AuthorsRoutes, FormsModule, CommonModule],
  providers: [],
})
export class AuthorsModule {}
