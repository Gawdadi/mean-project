import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);
    const token = localStorage.getItem('user');
    if (token) {
      req = req.clone({
        headers: req.headers.append('auth-token', JSON.parse(token).token),
      });
    }
    console.log(req);
    // return handle()
    return next.handle(req);
  }
}
