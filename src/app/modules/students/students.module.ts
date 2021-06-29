import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatButtonModule } from 'src/app/common/float-button/float-button.module';
import { LoaderModule } from 'src/app/common/loader/loader.module';
import { SearchStudentsComponent } from './search-students/search-students.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentsRoutes } from './students.routing';

const COMPONENTS = [StudentInfoComponent, SearchStudentsComponent];
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
export class StudentsModule {}
