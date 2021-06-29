import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.scss'],
})
export class SearchStudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getWithAuthors();
  }

  create() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  // getWithAuthors() {
  //   this.studentService.post('data').subscribe((res: any) => {
  //     this.students = res.content;
  //   });
  // }

  onEdit(authorId: string) {
    this.router.navigate([authorId], { relativeTo: this.route });
  }
}
