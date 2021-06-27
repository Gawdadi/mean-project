import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Author, AuthorResponse } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl: string = environment.apiUrl + 'authors';
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  getAll() {
    return new Observable((observer) => {
      this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
        observer.next(res);
      });
    });
  }

  post(data: Author): Observable<Author> {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe((res: AuthorResponse) => {
        observer.next(res.object);
      });
    });
  }

  put(data: Author): Observable<Author> {
    return new Observable((observer) => {
      this.http.put(this.apiUrl, data).subscribe((res: AuthorResponse) => {
        this.toastrService.success(res.message);
        observer.next(res.object);
      });
    });
  }

  getById(id: string): Observable<Author> {
    return new Observable((observer) => {
      this.http
        .get(`${this.apiUrl}/getById/${id}`)
        .subscribe((res: AuthorResponse) => {
          observer.next(res.object);
        });
    });
  }
}
