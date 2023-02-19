import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpGlobalService } from 'src/app/servicios/http-global.service';
import { StorageTokenService } from 'src/app/servicios/storage-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin!: FormGroup;
  formUsuario!: FormControl;
  formContrasenna!: FormControl;

  constructor(private controlAlerta: AlertController, private route: Router,  private servicioHttp: HttpGlobalService, private storage: StorageTokenService) {

  }

  ngOnInit() {
    this.crearComponentes();
    this.crearFormulario();
  }

  async login(){
    var texto="";
    if(this.formLogin.invalid){
      if(this.formUsuario.invalid)
        texto="Usuario no valido";
      else
        texto="Contraseña no valida";
      const alert = await this.controlAlerta.create({
        header: 'Error',
        message: texto,
        buttons: ['OK'],
      });
      await alert.present();
    }
    else{
      this.servicioHttp.login(this.formUsuario.value,this.formContrasenna.value).subscribe(
        (data: TokenUsuario  ) => {
          this.storage.saveToken(data.token);
          this.route.navigate(['tabs/lista-cursos']);
        },
        (error: ErrorApi) => {
          console.log(error);
        });
    }

  };

  crearComponentes(){
    this.formUsuario=new FormControl('',[Validators.required,Validators.email]);
    this.formContrasenna=new FormControl('',[Validators.required]);
  }

  crearFormulario(){
    this.formLogin=new FormGroup({
      formUsuario: this.formUsuario,
      formContrasenna: this.formContrasenna
    })
  }
  
}
