import { NgModule } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRoutes } from './books.routing';

const COMPONENTS = [BooksListComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [BooksRoutes],
  providers: [],
})
export class BooksModule {}
