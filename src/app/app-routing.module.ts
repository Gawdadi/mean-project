import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'm',
    component: MainComponent,
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('./modules/books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'authors',
        loadChildren: () =>
          import('./modules/authors/authors.module').then(
            (m) => m.AuthorsModule
          ),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./modules/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
