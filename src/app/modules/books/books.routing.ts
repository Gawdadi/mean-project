import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
];

export const BooksRoutes = RouterModule.forChild(routes);
