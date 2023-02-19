import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageTokenService {

  
  constructor() { }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }
}
