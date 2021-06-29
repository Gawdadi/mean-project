import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatButtonModule } from 'src/app/common/float-button/float-button.module';
import { LoaderModule } from 'src/app/common/loader/loader.module';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsRoutes } from './students.routing';

const COMPONENTS = [StudentsListComponent, StudentInfoComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    StudentsRoutes,
    FormsModule,
    CommonModule,
    LoaderModule,
    FloatButtonModule,
  ],
  providers: [],
})
export class BooksModule {}
