import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers';

const routes: Routes = [
  {
    path: 'm',
    component: MainComponent,
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('./modules/books/books.module').then((m) => m.BooksModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
