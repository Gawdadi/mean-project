import { Response } from '../utils/baseClass';
import { ModelBaseClass } from '../utils/baseClass/modelBaseClass';

export class Student extends ModelBaseClass {
  constructor() {
    super();
  }

  name: string;
  class: string;
  section: string;
  rno: number;
  uniqueId: string;
}

export class StudentResponse extends Response {
  constructor() {
    super();
  }

  object: Student;
}
