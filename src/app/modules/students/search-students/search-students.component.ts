import { Component, OnInit } from '@angular/core';
import { Student, CLASS } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService, MiscService } from 'src/app/services';
@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.scss'],
})
export class SearchStudentsComponent implements OnInit {
  students: Student[] = [];
  text: string = '';
  classes: string[] = CLASS;
  class: string = null;
  sections: string[] = [];
  section: string = null;

  constructor(
    private studentService: StudentService,
    private miscService: MiscService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getSections();
    this.getAll();
  }

  create() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onEdit(authorId: string) {
    this.router.navigate([authorId], { relativeTo: this.route });
  }

  getSections() {
    this.sections = this.miscService.getSections();
  }

  search() {
    if (this.text.length) {
      let obj = {};
      [
        obj['text'],
        //  obj['class'], obj['section']
      ] = [
        this.text,
        // this.class,
        // this.section,
      ];
      this.onSearch(obj);
    } else this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe((res: any) => {
      this.students = res.content;
    });
  }

  onSearch(obj: any) {
    this.studentService.search(obj).subscribe((res: any) => {
      console.log(res);
      this.students = res;
    });
  }
}
