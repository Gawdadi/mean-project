import { ModelBaseClass, Response } from '../utils/baseClass';
import { ISSUEBOOKSTATUS } from './enums.model';

export class IssueBook extends ModelBaseClass {
  bookId: string;
  studentId: number;
  author_id: string;
  notes: string;
  issueDate: string;
  returnDate: string;
  status: ISSUEBOOKSTATUS = ISSUEBOOKSTATUS.ISSUED;
  constructor() {
    super();
  }
}

export class IssueBookResponse extends Response {
  constructor() {
    super();
  }
  object: IssueBook;
}
