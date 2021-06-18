import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.apiUrl + 'books/';

  constructor(private http: HttpClient) {}

  post() {
    this.http.post(this.apiUrl, 'data').subscribe((res) => {
      console.log(res);
    });
  }

  getById() {
    return new Observable((observable) => {
      this.http.post(this.apiUrl, 'id').subscribe((res) => {
        observable.next();
      });
    });
  }

  getAll() {
    return new Observable((observable) => {
      this.http.get(this.apiUrl + 'getAll').subscribe((res) => {
        console.log(res);
        observable.next();
      });
    });
  }
}
