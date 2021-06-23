import { ModelBaseClass } from '../utils/baseClass/modelBaseClass';

export class Author extends ModelBaseClass {
  name: string;
  description: string;
  constructor() {
    super();
  }
}

export class AuthorResponse {
  message?: string;
  object?: AuthorResponse;
  success?: boolean;
  title?: string;
  constructor() {}
}
