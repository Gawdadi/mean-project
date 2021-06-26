import { Response } from '../utils/baseClass';
import { ModelBaseClass } from '../utils/baseClass/modelBaseClass';

export class Author extends ModelBaseClass {
  name: string;
  description: string;
  constructor() {
    super();
  }
}

export class AuthorResponse extends Response {
  object?: Author;
  constructor() {
    super();
  }
}
