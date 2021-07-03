import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student, CLASS } from 'src/app/models';
import { MiscService, StudentService } from 'src/app/services';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  student: Student = new Student();
  isLoading: boolean = false;
  studentId: string;
  sections: string[] = [];
  classes: string[] = CLASS;
  constructor(
    private studentService: StudentService,
    private miscService: MiscService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
    this.getSections();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('studentId');
      if (this.studentId !== 'add') {
        this.getById();
      }
    });
  }

  getSections() {
    this.sections = this.miscService.getSections();
  }

  onSubmit() {
    this.isLoading = true;
    if (this.studentId === 'add') this.post();
    else this.put();
  }

  post() {
    this.studentService.post(this.student).subscribe(
      (res) => {
        this.student = new Student();
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  put() {
    this.studentService.put(this.student).subscribe(
      (res) => {
        this.student = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  getById() {
    this.studentService.getById(this.studentId).subscribe((res) => {
      this.student = res;
    });
  }
}
