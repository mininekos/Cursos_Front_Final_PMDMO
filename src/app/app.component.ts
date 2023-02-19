import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpGlobalService } from './servicios/http-global.service';
import { StorageTokenService } from './servicios/storage-token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private servicioHttp: HttpGlobalService,private storage: StorageTokenService,private route: Router) {}

  async desconectarse(){

    this.servicioHttp.desconectarse().subscribe(
      (data) => {
        this.storage.removeToken();
        this.route.navigate(['/login']);
      },
      (error: ErrorApi) => {
        console.log(error);
      }
    );
  }

}
