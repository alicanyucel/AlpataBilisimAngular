import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable,of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(
    private toastr:ToastrService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{
        console.log(err);
        if(err.status==400)
        this.toastr.error(err.error);
       else if(err.status==0)
     this.toastr.warning("sunucuya baglanilamadi");
        return of()
      })
    );
  }
}