import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosCompradosPageRoutingModule } from './cursos-comprados-routing.module';

import { CursosCompradosPage } from './cursos-comprados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosCompradosPageRoutingModule
  ],
  declarations: [CursosCompradosPage]
})
export class CursosCompradosPageModule {}
