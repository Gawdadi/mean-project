import { ModelBaseClass } from '../utils/baseClass/modelBaseClass';

export class Book extends ModelBaseClass {
  name: string;
  author_id: string;
  description: string;
  constructor() {
    super();
  }
}

export class BookResponse {
  message?: string;
  object?: Book;
  success?: boolean;
  title?: string;
  constructor() {}
}
