import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IssueBook, IssueBookResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class IssueBooksService {
  private apiUrl: string = environment.apiUrl + 'issueBook';

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  post(data: IssueBook): Observable<IssueBook> {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe(
        (res: IssueBookResponse) => {
          this.toastrService.success(res.message);
          observer.next(res.object);
        },
        (error) => {
          this.toastrService.error(error.error.message);
          observer.error(error);
        }
      );
    });
  }

  put(data: IssueBook): Observable<IssueBook> {
    return new Observable((observer) => {
      this.http.put(this.apiUrl, data).subscribe(
        (res: IssueBookResponse) => {
          this.toastrService.success(res.message);
          observer.next(res.object);
        },
        (error) => {
          this.toastrService.error(error.error.message);
          observer.error(error);
        }
      );
    });
  }

  getById(id: string): Observable<IssueBook> {
    return new Observable((observer) => {
      this.http
        .get(`${this.apiUrl}/getById/${id}`)
        .subscribe((res: IssueBookResponse) => {
          observer.next(res.object);
        });
    });
  }

  getAll(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
        observer.next(res);
      });
    });
  }

  search(data: any): Observable<any> {
    return new Observable((observer) => {
      this.http.put(`${this.apiUrl}/search`, data).subscribe((res: any) => {
        observer.next(res.object);
      });
    });
  }
}
