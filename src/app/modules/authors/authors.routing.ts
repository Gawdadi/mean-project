import { RouterModule, Routes } from '@angular/router';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsListComponent,
  },
  {
    path: ':authorId',
    component: AuthorInfoComponent,
  },
];

export const AuthorsRoutes = RouterModule.forChild(routes);
