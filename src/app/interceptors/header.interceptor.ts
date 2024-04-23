import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = 'Pedro';

    const clonedRequest = request.clone({
      headers: request.headers.set('Username', userToken),
    });

    console.log(request.headers.get('Username'));

    return next.handle(clonedRequest).pipe(catchError(this.interceptError));
  }

  interceptError(error: HttpErrorResponse) {
    console.log('Error intercepted');
    console.warn(error);
    const errorThrow = new Error('Oops! Something went wrong');
    return throwError(() => errorThrow);
  }
}
