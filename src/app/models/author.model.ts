export class Author {
  id: string;
  name: string;
  constructor(options?: Author) {
    Object.assign(this, options);
  }
}

export class AuthorResponse {
  message?: string;
  object?: AuthorResponse;
  success?: boolean;
  title?: string;
  constructor(options?: AuthorResponse) {
    Object.assign(this, options);
  }
}
