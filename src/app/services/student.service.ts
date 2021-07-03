import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student, StudentResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl: string = environment.apiUrl + 'students';

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  post(data: Student): Observable<Student> {
    return new Observable((observer) => {
      this.http.post(this.apiUrl, data).subscribe(
        (res: StudentResponse) => {
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

  put(data: Student): Observable<Student> {
    return new Observable((observer) => {
      this.http.put(this.apiUrl, data).subscribe(
        (res: StudentResponse) => {
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

  getById(id: string): Observable<Student> {
    return new Observable((observer) => {
      this.http
        .get(`${this.apiUrl}/getById/${id}`)
        .subscribe((res: StudentResponse) => {
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
}
