import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarAsisPageRoutingModule } from './finalizar-asis-routing.module';

import { FinalizarAsisPage } from './finalizar-asis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarAsisPageRoutingModule
  ],
  declarations: [FinalizarAsisPage]
})
export class FinalizarAsisPageModule {}
