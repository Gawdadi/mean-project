import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models';
import { StudentService } from 'src/app/services';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  student: Student = new Student();
  isLoading: boolean = false;
  studentId: string;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('studentId');
      if (this.studentId !== 'add') {
        this.getById();
      }
    });
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
