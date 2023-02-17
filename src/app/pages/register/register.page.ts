import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuarioRegistro: UsuarioRegister = {
    usuario: {
      name: '',
      dni: '',
      email: '',
      tlf: ''
    },
    password: '',
    confirmPassword: ''
  };
  constructor() {

   }

  ngOnInit() {
  }

  register() {
    console.log(this.usuarioRegistro);
  }

}
