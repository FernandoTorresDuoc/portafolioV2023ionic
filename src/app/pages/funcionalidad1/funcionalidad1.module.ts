import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funcionalidad1PageRoutingModule } from './funcionalidad1-routing.module';

import { Funcionalidad1Page } from './funcionalidad1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funcionalidad1PageRoutingModule
  ],
  declarations: [Funcionalidad1Page]
})
export class Funcionalidad1PageModule {}
