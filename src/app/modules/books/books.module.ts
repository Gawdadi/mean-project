import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/common/loader/loader.module';
import { BookInfoComponent } from './book-info/book-info.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRoutes } from './books.routing';

const COMPONENTS = [BooksListComponent, BookInfoComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [BooksRoutes, FormsModule, CommonModule, LoaderModule],
  providers: [],
})
export class BooksModule {}
