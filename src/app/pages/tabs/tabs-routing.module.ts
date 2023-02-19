import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'lista-cursos',
        loadChildren: () => import('./lista-cursos/lista-cursos.module').then( m => m.ListaCursosPageModule)
      },
      {
        path: 'cursos-comprados',
        loadChildren: () => import('./cursos-comprados/cursos-comprados.module').then( m => m.CursosCompradosPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
