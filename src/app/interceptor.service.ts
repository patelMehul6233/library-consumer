import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):Observable<HttpEvent<any>> {

   console.log("call interceptor")
  //  const request = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${true}`
  //   }
  // });

  //return next.handle(request);
   return next.handle(req)

  }
}
