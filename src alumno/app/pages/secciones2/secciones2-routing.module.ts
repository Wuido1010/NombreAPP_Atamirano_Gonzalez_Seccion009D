import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secciones2Page } from './secciones2.page';

const routes: Routes = [
  {
    path: '',
    component: Secciones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secciones2PageRoutingModule {}
