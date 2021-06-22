export class Login {
  username: string;
  password: string;
  constructor(options?: Login) {
    Object.assign(this, options);
  }
}

export class LoginResponse {
  message?: string;
  object?: Login;
  success?: boolean;
  title?: string;
  constructor(options?: LoginResponse) {
    Object.assign(this, options);
  }
}
