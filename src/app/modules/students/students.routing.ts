import { RouterModule, Routes } from '@angular/router';
import { SearchStudentsComponent } from './search-students/search-students.component';
import { StudentInfoComponent } from './student-info/student-info.component';

const routes: Routes = [
  {
    path: '',
    component: SearchStudentsComponent,
  },
  {
    path: ':studentId',
    component: StudentInfoComponent,
  },
];

export const StudentsRoutes = RouterModule.forChild(routes);
