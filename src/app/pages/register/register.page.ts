import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpGlobalService } from 'src/app/servicios/http-global.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister!: FormGroup;
  formNombre!: FormControl;
  formDni!: FormControl;
  formEmail!: FormControl;
  formTelefono!: FormControl;
  formPassword!: FormControl;
  formPassword2!: FormControl;



  constructor( private controlAlerta: AlertController, private route: Router,private servicioHttp: HttpGlobalService ) {

  }

  ngOnInit() {
    this.crearComponentes();
    this.crearFormulario();
  }

  async register() {
    var texto="";
    if(this.formRegister.invalid){
      if(this.formNombre.invalid)
        texto="Nombre no valido";
      else if(this.formDni.invalid)
        texto="Dni no valido";
      else if(this.formEmail.invalid)
        texto="Email no valido";
      else if(this.formTelefono.invalid)
        texto="Telefono no valido";
      else if(this.formPassword.invalid)
        texto="Contraseña no valida";
      else
        texto="Contraseñas no coinciden";
      const alert = await this.controlAlerta.create({
        header: 'Error',
        message: texto,
        buttons: ['OK'],
      });
      await alert.present();
      
    }
    else{
      this.servicioHttp.registrarUsuario(this.formNombre.value,this.formDni.value,this.formEmail.value,this.formTelefono.value,this.formPassword.value).subscribe(
        (data: Usuario  ) => {
          this.formRegister.reset(); 
          this.route.navigate(['login']);
        },
        (error: ErrorApi) => {
          console.log(error);
        });
    }
  }

  crearComponentes() {
    this.formNombre=new FormControl('',[Validators.required]);
    this.formDni=new FormControl('',[Validators.pattern('[0-9]{8}[A-Z a-z]'),Validators.required]);
    this.formEmail=new FormControl('',[Validators.required,Validators.email]);
    this.formTelefono=new FormControl('',[Validators.pattern('[0-9]{9}')]);
    this.formPassword=new FormControl('',[Validators.required,Validators.minLength(8)]);
    this.formPassword2=new FormControl('',[Validators.required,Validators.minLength(8)]);

    this.formPassword.valueChanges.subscribe((value) => {
      if (value && value.length >= 8) {
        this.formPassword2.setValidators([Validators.required, Validators.minLength(8), Validators.pattern(value)]);
        this.formPassword2.updateValueAndValidity();
      } else {
        this.formPassword2.setValidators([Validators.required, Validators.minLength(8)]);
        this.formPassword2.updateValueAndValidity();
      }
    });
  }


  crearFormulario() {
    this.formRegister=new FormGroup({
      formNombre: this.formNombre,
      formDni: this.formDni,
      formEmail: this.formEmail,
      formTelefono: this.formTelefono,
      formPassword: this.formPassword,
      formPassword2: this.formPassword2
    })
  }
}
