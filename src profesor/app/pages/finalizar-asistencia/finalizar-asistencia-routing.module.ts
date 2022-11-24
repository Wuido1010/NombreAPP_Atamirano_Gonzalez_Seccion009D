import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarAsistenciaPage } from './finalizar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarAsistenciaPageRoutingModule {}
