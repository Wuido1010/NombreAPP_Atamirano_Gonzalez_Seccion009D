import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoqrPage } from './fotoqr.page';

const routes: Routes = [
  {
    path: '',
    component: FotoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoqrPageRoutingModule {}
