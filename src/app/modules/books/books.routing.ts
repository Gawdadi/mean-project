import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: ':bookId',
    component: BookInfoComponent,
  },
];

export const BooksRoutes = RouterModule.forChild(routes);
