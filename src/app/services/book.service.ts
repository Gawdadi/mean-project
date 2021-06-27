import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Book, BookResponse } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.apiUrl + 'books';

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  getAll() {
    return new Observable((observer) => {
      this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
        observer.next(res);
      });
    });
  }

  post(data: Book): Observable<Book> {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe((res: BookResponse) => {
        this.toastrService.success(res.message, 'Successfully created');
        observer.next(res.object);
      });
    });
  }

  put(data: Book): Observable<Book> {
    return new Observable((observer) => {
      this.http.put(this.apiUrl, data).subscribe((res: BookResponse) => {
        observer.next(res.object);
      });
    });
  }

  getById(id: string): Observable<Book> {
    return new Observable((observer) => {
      this.http
        .get(`${this.apiUrl}/getById/${id}`)
        .subscribe((res: BookResponse) => {
          observer.next(res.object);
        });
    });
  }
}
