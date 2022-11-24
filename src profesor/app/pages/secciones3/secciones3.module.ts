import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secciones3PageRoutingModule } from './secciones3-routing.module';

import { Secciones3Page } from './secciones3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secciones3PageRoutingModule
  ],
  declarations: [Secciones3Page]
})
export class Secciones3PageModule {}
