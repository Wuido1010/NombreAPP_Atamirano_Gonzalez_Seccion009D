import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secciones1Page } from './secciones1.page';

const routes: Routes = [
  {
    path: '',
    component: Secciones1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secciones1PageRoutingModule {}
