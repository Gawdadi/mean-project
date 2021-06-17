export class Books {
  id: string;
  name: string;
  constructor(options?: Books) {
    Object.assign(this, options);
  }
}

export class BooksResponse {
  message?: string;
  object?: BooksResponse;
  success?: boolean;
  title?: string;
  constructor(options?: BooksResponse) {
    Object.assign(this, options);
  }
}
