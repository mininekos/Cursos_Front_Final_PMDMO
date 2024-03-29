import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageTokenService } from '../servicios/storage-token.service';

@Injectable({
  providedIn: 'root'
})
export class ComprobarTokenGuard implements CanActivate {


  constructor(private storageService: StorageTokenService, private router: Router ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const token = this.storageService.getToken()
      if(token){
        return true;
      }
      this.router.navigate(['/login'])
      return false;
  }
  
}
