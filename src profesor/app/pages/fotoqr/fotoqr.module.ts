import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoqrPageRoutingModule } from './fotoqr-routing.module';

import { FotoqrPage } from './fotoqr.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoqrPageRoutingModule,
    QRCodeModule
  ],
  declarations: [FotoqrPage]
})
export class FotoqrPageModule {}
