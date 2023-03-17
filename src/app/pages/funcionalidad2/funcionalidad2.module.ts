import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funcionalidad2PageRoutingModule } from './funcionalidad2-routing.module';

import { Funcionalidad2Page } from './funcionalidad2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funcionalidad2PageRoutingModule
  ],
  declarations: [Funcionalidad2Page]
})
export class Funcionalidad2PageModule {}
