import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosCompradosPage } from './cursos-comprados.page';

const routes: Routes = [
  {
    path: '',
    component: CursosCompradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosCompradosPageRoutingModule {}
