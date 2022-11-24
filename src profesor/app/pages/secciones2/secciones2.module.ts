import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secciones2PageRoutingModule } from './secciones2-routing.module';

import { Secciones2Page } from './secciones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secciones2PageRoutingModule
  ],
  declarations: [Secciones2Page]
})
export class Secciones2PageModule {}
