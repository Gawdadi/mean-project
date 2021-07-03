import { RouterModule, Routes } from '@angular/router';
import { IssuedBookInfoComponent } from './issuedBookInfo/issuedBookInfo.component';
import { IssuedBooksComponent } from './issuedBooks/issuedBooks.component';

const routes: Routes = [
  {
    path: '',
    component: IssuedBooksComponent,
  },
  {
    path: ':issuedBookId',
    component: IssuedBookInfoComponent,
  },
];

export const IssueBooksRoutes = RouterModule.forChild(routes);
