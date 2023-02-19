import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorTokenService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token de acceso desde el servicio de autenticación
    const token = localStorage.getItem('token');

    // Clonar la solicitud original y agregar el token de acceso a la cabecera "Authorization"
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    // Pasar la solicitud modificada al siguiente interceptor o al servidor
    return next.handle(authReq);
  }
}
