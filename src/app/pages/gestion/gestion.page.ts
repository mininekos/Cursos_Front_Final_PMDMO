import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  formCurso!: FormGroup;
  formNombre!: FormControl;
  formDescripcion!: FormControl;
  formPrecio!: FormControl;

  @ViewChild(IonModal) modal!: IonModal;

  constructor(private alerta: AlertController) { }

  ngOnInit() {
    this.crearComponentes();
    this.crearFormulario();
  }

  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if(this.formCurso.valid) {
      this.modal.dismiss(this.formCurso.value, 'confirm');
    } else {
      this.alerta.create({
        header: 'Error',
        message: 'Los campos no son válidos',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(ev.detail.data);
    }
  }


  crearComponentes(){
    this.formNombre=new FormControl('',[Validators.required]);
    this.formDescripcion=new FormControl('',[Validators.required]);
    this.formPrecio=new FormControl('',[Validators.required]);
  }

  crearFormulario(){
    this.formCurso=new FormGroup({
      nombre: this.formNombre,
      descripcion: this.formDescripcion,
      precio: this.formPrecio
    });
  }

  abrirModal(){
    this.modal.present();
    
  }

}
