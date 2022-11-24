import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secciones1PageRoutingModule } from './secciones1-routing.module';

import { Secciones1Page } from './secciones1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secciones1PageRoutingModule
  ],
  declarations: [Secciones1Page]
})
export class Secciones1PageModule {}
