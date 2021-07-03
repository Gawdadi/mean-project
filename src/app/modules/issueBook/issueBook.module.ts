import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatButtonModule } from 'src/app/common/float-button/float-button.module';
import { LoaderModule } from 'src/app/common/loader/loader.module';
import { IssueBooksRoutes } from './issueBook.routing';
import { IssuedBookInfoComponent } from './issuedBookInfo/issuedBookInfo.component';
import { IssuedBooksComponent } from './issuedBooks/issuedBooks.component';

const COMPONENTS = [IssuedBookInfoComponent, IssuedBooksComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    IssueBooksRoutes,
    FormsModule,
    CommonModule,
    LoaderModule,
    FloatButtonModule,
  ],
  providers: [],
})
export class IssueBookModule {}
