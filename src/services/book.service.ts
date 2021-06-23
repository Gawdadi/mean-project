import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.apiUrl + 'books/';

  constructor(private http: HttpClient) {}

  post(data: Book) {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe((res) => {
        console.log(res);
        observer.next(res);
      });
    });
  }

  put(data: Book) {
    return new Observable((observer) => {
      this.http.put(this.apiUrl, data).subscribe((res) => {
        console.log(res);
        observer.next(res);
      });
    });
  }

  getById(id: string) {
    return new Observable((observable) => {
      this.http.get(`${this.apiUrl}/${id}`).subscribe((res) => {
        observable.next();
      });
    });
  }

  getAll() {
    return new Observable((observable) => {
      this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
        console.log(res);
        observable.next();
      });
    });
  }
}
