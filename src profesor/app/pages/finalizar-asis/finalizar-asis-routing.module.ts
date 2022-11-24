import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarAsisPage } from './finalizar-asis.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarAsisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarAsisPageRoutingModule {}
