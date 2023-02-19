import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpGlobalService {

  constructor(private http: HttpClient) { 

  }

  registrarUsuario(nombre: string, dni: string, email: string, telefono: string, password: string){
    return this.http.post<Usuario>("http://localhost:3000/usuario/crear",{ nombre, dni, email, telefono, password });
  }

  login(email: string, password: string){
    return this.http.post<TokenUsuario>("http://localhost:3000/usuario/login",{ email, password });
  }

  desconectarse(){
    return this.http.get("http://localhost:3000/usuario/logout");
  }
}
