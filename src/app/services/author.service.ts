import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl: string = environment.apiUrl + 'authors';
  constructor(private http: HttpClient) {}

  getAll() {
    return new Observable((observer) => {
      this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
        observer.next(res);
      });
    });
  }

  post(data: Author) {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe((res) => {
        console.log(res);
        observer.next(res);
      });
    });
  }

  put(data: Author) {
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
        observable.next(res);
      });
    });
  }
}
