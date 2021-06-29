import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent,
  },
  {
    path: ':studentId',
    component: StudentInfoComponent,
  },
];

export const StudentsRoutes = RouterModule.forChild(routes);
