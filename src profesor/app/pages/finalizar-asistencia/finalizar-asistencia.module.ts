import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarAsistenciaPageRoutingModule } from './finalizar-asistencia-routing.module';

import { FinalizarAsistenciaPage } from './finalizar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarAsistenciaPageRoutingModule
  ],
  declarations: [FinalizarAsistenciaPage]
})
export class FinalizarAsistenciaPageModule {}
