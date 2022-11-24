import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoqrPageRoutingModule } from './fotoqr-routing.module';

import { FotoqrPage } from './fotoqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoqrPageRoutingModule
  ],
  declarations: [FotoqrPage]
})
export class FotoqrPageModule {}
