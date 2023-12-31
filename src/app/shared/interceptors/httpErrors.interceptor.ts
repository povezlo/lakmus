import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = error.message;
        this.toastr.error(`Error: ${error.name}: ${error.status}`, 'Ups!');
        return throwError(() => errorMessage);
      })
    );
  }
}
