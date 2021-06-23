export class Book {
  id: string;
  name: string;
  author_id: string;
  constructor(options?: Book) {
    Object.assign(this, options);
  }
}

export class BookResponse {
  message?: string;
  object?: BookResponse;
  success?: boolean;
  title?: string;
  constructor(options?: BookResponse) {
    Object.assign(this, options);
  }
}
