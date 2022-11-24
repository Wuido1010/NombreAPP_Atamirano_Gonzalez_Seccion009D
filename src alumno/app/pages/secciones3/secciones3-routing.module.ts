import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secciones3Page } from './secciones3.page';

const routes: Routes = [
  {
    path: '',
    component: Secciones3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secciones3PageRoutingModule {}
