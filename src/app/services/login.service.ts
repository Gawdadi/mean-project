import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = environment.apiUrl + 'login';

  constructor(private http: HttpClient) {}

  post(data: Login) {
    return new Observable((observable) => {
      this.http.post(this.apiUrl, data).subscribe(
        (res: LoginResponse) => {
          localStorage.setItem('user', JSON.stringify(res));
          observable.next(res);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
